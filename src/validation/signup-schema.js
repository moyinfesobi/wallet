import * as Yup from "yup";
export const initialSignupValues = {
    username: "",
    password: "",
    email: "",
};

export const SignupSchema = Yup.object().shape({
    username: Yup.string()
    .trim()
    .required("Username is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
    .email("Invalid email format")
    .trim()
    .required("Email is required"),
});