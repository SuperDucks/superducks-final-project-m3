import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { BtnPrimary } from "../../styles/buttons";
import { Form, Modal } from "./styles";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";

interface FormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors?: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Must be an E-mail")
      .required("E-mail is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(/[A-Z]/, "Must contain at least 1 letter")
      .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
      .matches(/(\d)/, "Must contain at least 1 number")
      .matches(/(\W)|_/, "Must contain at least 1 special character")
      .matches(/.{8,}/, "Must contain at least 8 digits"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must be identical"),
  })
  .required();

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const { setIsOpenModalRegister, registerUser, setIsOpenModal } =
    useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const modalRef = useOutsiedeClick(() => {
    setIsOpenModalRegister(false);
  });

  const handleBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <Modal>
      <div className="modal-content" ref={modalRef}>
        <div className="title-container">
          <h2>Create your account</h2>
          <button
            className="close"
            onClick={() => setIsOpenModalRegister(false)}
          >
            <MdOutlineClose size={32} />
          </button>
        </div>
        <Form onSubmit={handleSubmit(registerUser)}>
          <div className="input-container">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" {...register("name")} />
            <small>{errors.name?.message}</small>
          </div>
          <div className="input-container">
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="E-mail" {...register("email")} />
            <small>{errors.email?.message}</small>
          </div>
          <div className="input-container">
            <label htmlFor="">Password</label>
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
                  <AiFillEyeInvisible size={"20"} />
                ) : (
                  <AiFillEye size={"20"} />
                )}
              </button>
            </div>
            <small>{errors.password?.message}</small>
          </div>
          <div className="input-container">
            <label htmlFor="">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            <small>{errors.confirmPassword?.message}</small>
          </div>
        </Form>
        <BtnPrimary
          type="submit"
          className="btn-submit"
          onClick={() => {
            setIsOpenModalRegister(false);
            setIsOpenModal(true);
          }}
        >
          Register
        </BtnPrimary>
      </div>
    </Modal>
  );
};
export default RegisterModal;
