import { useState } from "react";
import InputSelect from "../inputSelect";
import * as C from "./style";
import { Softwares } from "../../types/softwares.types";

interface IModalProps {
  toggleModalSoftware: () => void;
}

const ModalSoftware = ({ toggleModalSoftware }: IModalProps) => {
  const [softwaresList, setSoftwaresList] = useState<Softwares[]>([]);
  const [software, setSoftware] = useState<Softwares>({
    software: "",
    nivel: "",
  });
  const handleInputChange = (fieldName: string, value: string) => {
    setSoftware({ ...software, [fieldName]: value });
  };

  const handleCadastro = () => {
    const updatedSoftwaresList = [...softwaresList, software];
    setSoftwaresList(updatedSoftwaresList);
    console.log("Dados do formulário:", updatedSoftwaresList);
    setSoftware({
      software: "",
      nivel: "",
    });
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Adicionar Software</h1>
          <button onClick={toggleModalSoftware}> X</button>
        </C.ContentTitle>
        <C.ContainerModal>
          <InputSelect
            label="Selecione o Software"
            options={[
              "",
              "Catia",
              "MS Project",
              "Nx",
              "Pacote Office",
              "PLM",
              "PowerBI",
              "SAP",
              "SolidWorks",
              "TCAE",
            ]}
            className="software"
            value={software.software}
            onChange={(e) => handleInputChange("software", e.target.value)}
          />
          <InputSelect
            label="Selecione o nivel"
            options={["", "Básico", "Intermediario", "Avançado"]}
            className="software"
            value={software.nivel}
            onChange={(e) => handleInputChange("nivel", e.target.value)}
          />
          <C.ContentButtons>
            {softwaresList.length > 0 && <button>Salvar</button>}
            <button onClick={handleCadastro}>Adicionar</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalSoftware };
