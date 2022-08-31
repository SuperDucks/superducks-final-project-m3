import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Must be an email")
      .required("E-mail is required"),
    password: yup.string().required("Password is required"),
  })
  .required();
