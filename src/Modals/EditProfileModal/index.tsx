import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { BtnPrimary } from "../../styles/buttons";
import { editSchema } from "../../validators/EditUser";
import { useOutsiedeClick } from "../../hooks/useOutsideClick";
import { Form, Modal } from "./styes";
import { IFormEdit } from "../../context/UserContext/interfaces";
import { motion } from "framer-motion";



const EditProfileModal = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { setIsOpenEditProfileModal, editProfileUser, user } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormEdit>({
    resolver: yupResolver(editSchema),
    defaultValues: {photo: user?.avatar_url, name: user?.name},
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
      <motion.div
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="modal-content" ref={modalRef}>
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
        > <div className="edit-options">
          <h2>Edit options:</h2>
          <div className="input-container">
            <label htmlFor="">Photo</label>
            <input type="url"
              placeholder="Photo" 
             {...register("photo")}/>
            <small>{errors.photo?.message}</small>
          </div>
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
        </div>
          
          <div className="input-container">
            <label htmlFor="">Current password (to change)</label>
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
      </motion.div>
    </Modal>
  );
};
export default EditProfileModal;