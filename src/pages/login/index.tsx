import * as C from "./style";
import Logo from "../../image/logoTecnocar2.png";
import InputField from "../../components/inputField";
import { FormEvent } from "../../types/types";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const cleanForm = () => {
    setPassword("");
    setRegistration("");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(import.meta.env.VITE_API_LOGIN_URL, {
        registration,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        setLoading(false);
        navigate("/tutorial");
      }, 1000);
    } catch (error: any) {
      setTimeout(() => {
        setError("");
        cleanForm();
      }, 2000);
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("Erro na comunicação com o servidor");
      } else {
        setError(error.message);
      }

      console.error("Erro na requisição:", error);
      setLoading(false);
    }
  };

  return (
    <C.Container>
      <C.ContentCard>
        <C.ContentCracha></C.ContentCracha>
        <C.ContentLogo>
          <C.Image src={Logo} alt="" />
          {error && <p> {error}</p>}
        </C.ContentLogo>
        <C.ContentForm onSubmit={handleSubmit}>
          <C.ContainerInputs>
            <InputField
              label="Matricula"
              required={true}
              name="matricula"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
            />
            <C.ContentPassword>
              <InputField
                label="Senha"
                type="password"
                required={true}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </C.ContentPassword>
          </C.ContainerInputs>
          <C.Forgotpassword>Esqueceu a senha?</C.Forgotpassword>

          <C.Buttons type="submit">
            {loading ? <p> Entrando...</p> : <p>Entrar</p>}
          </C.Buttons>
        </C.ContentForm>
      </C.ContentCard>
    </C.Container>
  );
};

export { Login };
