import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Form, Header, Main } from "./styles";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'


interface FormProps {
  email: string;
  password: string;
  errors?: string;
}

const schema = yup.object({
  email: yup
  .string()
  .email("Must be an email")
  .required("E-mail is required"),
  password: yup
  .string()
  .required("Password is required"),

}).required();

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const {loginUser} = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<FormProps>({
    resolver: yupResolver(schema)
  });

  const handleBtnClick = () => {
   setShowPassword(prevState => !prevState)
  }

  return (
    <>
      <Header>
        <h1>Duckplay</h1>
      </Header>
      <Main>
        <div className="form-container">
          <Form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="E-mail" id="email" {...register("email")}/>
            <small>{errors.email?.message}</small>
            <label htmlFor="password">Password</label>
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" id="password" {...register("password")}/>
            <small>{errors.password?.message}</small>
            <button type="submit" onClick={() => navigate('/dashboard', { replace: true })}>Sign In</button>
            <button onClick={handleBtnClick} className="show-password">
              {
                showPassword ? <AiFillEyeInvisible size={'32'}/>
                :               
                <AiFillEye size={'32'}/>
              }
              </button>
          </Form>
        </div>  
      </Main>
    </>
  );
};
export default Login;