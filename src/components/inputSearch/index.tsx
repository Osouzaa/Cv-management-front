import * as C from "./style";
import IconLupa from "../../image/icon_lupa.svg";
import User_Sum from "../../image/user_sum.svg";
import { useState } from "react";
import { ModalUser } from "../modalUser";

const InputSearch = ({ onSearch } : any) => {
  const [newUser, setNewUser] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleModal = () => {
    setNewUser(!newUser);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <C.Container>
      <C.ContainerSearch>
        <C.ContentInput
          type="text"
          placeholder="Pesquisar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <C.ContentImage src={IconLupa} alt="" onClick={handleSearch}/>
        <C.ContentButton onClick={toggleModal}>
          <img src={User_Sum} alt="icone de adicionar usuário" />
        </C.ContentButton>
      </C.ContainerSearch>
      {newUser && <ModalUser onclose={toggleModal} />}
    </C.Container>
  );
};

export { InputSearch}
