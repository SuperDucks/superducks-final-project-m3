import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Modal, Form, ThemeTitle } from "./styles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { BtnOutlineModal, BtnPrimary } from "../../styles/buttons";

interface FormProps {
  email: string;
  password: string;
  errors?: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be an email")
      .required("E-mail is required"),
    password: yup
    .string()
    .required("Password is required"),
  })
  .required();

const LoginModal = () => {
  const { loginUser, setIsOpenModal, setIsOpenModalRegister } =
    useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const handleBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Modal>
        <div className="modal-content">
          <div className="container-title">
            <ThemeTitle>Login</ThemeTitle>
            <button className="close" onClick={() => setIsOpenModal(false)}>
              <MdOutlineClose size={32} />
            </button>
          </div>
          <Form onSubmit={handleSubmit(loginUser)}>
            <div className="form-container">
              <div className="input-container">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  {...register("email")}
                />
                <small>{errors.email?.message}</small>
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <div className="container-eye">
                  <input
                    className="input-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    {...register("password")}
                  />

                  <button onClick={handleBtnClick} className="show-password">
                    {showPassword ? (
                      <AiFillEyeInvisible size={"20"}/>
                    ) : (
                      <AiFillEye size={"20"} />
                    )}
                  </button>
                </div>
                <small>{errors.password?.message}</small>
              </div>
            </div>

            <div className="login-buttons">
              <BtnPrimary
                type="submit"
                onClick={() => {
                  setIsOpenModal(false);
                  navigate("/dashboard", { replace: true });
                }}
              >
                Log In
              </BtnPrimary>
              <BtnOutlineModal
                onClick={() => {
                  setIsOpenModalRegister(true);
                  setIsOpenModal(false);
                }}
              >
                Sign Up
              </BtnOutlineModal>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default LoginModal;
