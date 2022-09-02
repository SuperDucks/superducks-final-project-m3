import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { BtnPrimary } from "../../styles/buttons";
import { registerSchema } from "../../validators/RegisterUser";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";
import { Form, Modal } from "./styes";
import { IFormEdit } from "../../context/UserContext/interfaces";


const EditProfileModal = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { setIsOpenEditProfileModal, editProfileUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEdit>({
    resolver: yupResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const modalRef = useOutsiedeClick(() => {
    setIsOpenEditProfileModal(false);
  });

  const handleBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <Modal>
      <div className="modal-content" ref={modalRef}>
        <div className="title-container">
          <h2>Edit your profile</h2>
          <button
            className="close"
            onClick={() => setIsOpenEditProfileModal(false)}
          >
            <MdOutlineClose size={32} />
          </button>
        </div>
        <Form
          onSubmit={handleSubmit((formData) =>
            editProfileUser(formData, setLoading)
          )}
        >
          <div className="input-container">
            <label htmlFor="">Name</label>
            <input type="text"
              placeholder="Name" 
             {...register("name")} />
            <small>{errors.name?.message}</small>
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
              <button type="button" onClick={handleBtnClick} className="show-password">
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
        <BtnPrimary type="submit" padding='big' className="btn-submit" disabled={loading}>
          {loading ? "Saving..." : "Save editions"}
        </BtnPrimary>
        </Form>
      </div>
    </Modal>
  );
};
export default EditProfileModal;