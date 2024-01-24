import * as C from "./style";
import IconLupa from "../../image/icon_lupa.svg";

const InputSearch = ()=> {
    return (
        <C.Container>
        <C.ContainerSearch>
          <C.ContentInput type="text" placeholder="Pesquisar" />
          <C.ContentImage src={IconLupa} alt="" />
        </C.ContainerSearch>
      </C.Container>
    )
}

export { InputSearch}