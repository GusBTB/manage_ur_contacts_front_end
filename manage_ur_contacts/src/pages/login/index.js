import {
  Container,
  Centered,
  Button,
  CenteredUpperLogo,
  Form,
  Input,
  Title,
} from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import axios from "axios";

function Login() {
  const { loginUser } = useContext(UserContext);
  const nav = useNavigate();
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Formato de E-mail incorreto"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    // loginUser(data);
    axios
      .post("http://localhost:3001/login", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Centered>
        <CenteredUpperLogo>
          <Title fontSize="25px" color="red">
            Manage ur contacts
          </Title>
        </CenteredUpperLogo>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input placeholder="E-mail" {...register("email")} />
          <Input placeholder="Senha" {...register("password")} />
          <Button type="submit">Entrar</Button>
          <Title
            fontSize="16px"
            color="grey"
            onClick={(ev) => nav("/sign-up")}
            style={{ cursor: "pointer" }}
          >
            Cadastrar-se
          </Title>
        </Form>
      </Centered>
    </Container>
  );
}

export default Login;
