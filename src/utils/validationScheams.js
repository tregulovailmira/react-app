import * as Yup from "yup";

export const signInScheme = Yup.object({
  login: Yup.string().min(4).max(32).required("This is required field"),
  email: Yup.string()
    .trim()
    .email()
    .max(128)
    .required("This is required field"),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,128}$/,
      "Password must contain at least 8 letters"
    )
    .required("This is required field"),
});
