import * as C from "./style";
import IconOnline from "../../image/icon_online.svg";

const HeaderAdmin = () => {
    return (
        <C.ContainerHeader>
        <C.ContentAdmin>
          <C.InfoAdmin>
            <p>Gabriel Souza Alves</p>
            <p className="email">gabrielsouza@teste.com</p>
          </C.InfoAdmin>
          <C.ContentImage>
            <img src={IconOnline} alt="icone user" />
            <C.Online />
          </C.ContentImage>
        </C.ContentAdmin>
      </C.ContainerHeader>
    )
}

export { HeaderAdmin}