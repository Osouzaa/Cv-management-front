import React, { useEffect } from "react";
import * as C from "./style";
import { CardModal } from "../cardModal";
import Import from "../../image/import.svg";
import Export from "../../image/export.svg";
import * as XLSX from "xlsx";

interface ModalExcelProps {
  isOpen?: boolean;
  onClose?: () => void;
  classname?: string;
  dataToExport?: any[] | null;
}

const ModalExcel: React.FC<ModalExcelProps> = ({
  onClose,
  classname,
  dataToExport,
}) => {
  const handleExportClick = () => {
    if (dataToExport) {
      const ws = XLSX.utils.json_to_sheet(dataToExport);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
      XLSX.writeFile(wb, "base_de_candidatos.xlsx");
    }
  };


  return (
    <>
      <C.Container className={classname}>
        <C.Content>
          <C.Title>Excel Connect</C.Title>
          <CardModal
            title="Importe sua base de excel aqui"
            alt="Imagem de importação"
            img={Import}
          />
          <CardModal
            title="Exportar para base de excel"
            alt="Imagem de exportação"
            img={Export}
            onClick={handleExportClick}
          />
          <C.Button onClick={onClose}>Fechar Modal</C.Button>
        </C.Content>
      </C.Container>
    </>
  );
};

export { ModalExcel };
