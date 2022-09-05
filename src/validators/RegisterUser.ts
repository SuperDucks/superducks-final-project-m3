import * as yup from "yup";

export const registerSchema = yup
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
