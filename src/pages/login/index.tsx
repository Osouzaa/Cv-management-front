import * as C from "./style";
import Logo from "../../image/logoTecnocar2.png";
import InputField from "../../components/inputField";
import { FormEvent } from "../../types/types";

const Login = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <C.Container>
      <C.ContentCard>
        <C.ContentCracha></C.ContentCracha>
        <div>
          <C.Image src={Logo} alt="" />
        </div>
        <C.ContentForm onSubmit={handleSubmit}>
          <C.ContainerInputs>
            <InputField label="Matricula" required={true} />
            <C.ContentPassword>
              <InputField label="Senha" type="password" required={true} />
            </C.ContentPassword>
          </C.ContainerInputs>
          <C.Forgotpassword>Esqueceu a senha?</C.Forgotpassword>
          <C.Buttons type="submit">Entrar</C.Buttons>
        </C.ContentForm>
      </C.ContentCard>
    </C.Container>
  );
};

export { Login };
