import InputField from "./InputField";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../Recoil/User/useLoginState";

function RegisterForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginState();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "İsim 20 karakterden az olmalı.")
        .required("Bu alan zorunludur."),
      surname: Yup.string()
        .max(20, "Soyad 20 karakterden az olmalı.")
        .required("Bu alan zorunludur."),
      email: Yup.string()
        .max(254, "E-mail 254 karakterden az olmalı.")
        .email("Geçersiz mail adresi.")
        .required("Bu alan zorunludur."),
      password: Yup.string()
        .max(128, "Şifre 128 karakterden az olmalı.")
        .min(6, "Şifre 6 karakterden fazla olmalı.")
        .required("Bu alan zorunludur."),
      confirmPassword: Yup.string()
        .max(128, "Şifre 128 karakterden az olmalı.")
        .min(6, "Şifre 6 karakterden fazla olmalı.")
        .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor.")
        .required("Bu alan zorunludur."),
    }),
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post("http://localhost:3000/user/signup", values)
        .then((resp) => {
          localStorage.setItem("access-token", resp.data.user.token);
          resetForm();
          setIsLoggedIn(true);
          navigate("/user");
        })
        .catch((err) => {
          console.log(err.response.data.error);
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-3"
      autoComplete="off"
      noValidate
    >
      {formik.touched.name && formik.errors.name ? (
        <small className="text-xs text-red-500">{formik.errors.name}</small>
      ) : null}
      <InputField
        label="Ad"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${
          formik.touched.name && formik.errors.name
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.touched.surname && formik.errors.surname ? (
        <small className="text-xs text-red-500">{formik.errors.surname}</small>
      ) : null}
      <InputField
        label="Soyad"
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${
          formik.touched.surname && formik.errors.surname
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.touched.email && formik.errors.email ? (
        <small className="text-xs text-red-500">{formik.errors.email}</small>
      ) : null}
      <InputField
        label="E-mail"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${
          formik.touched.email && formik.errors.email
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.touched.password && formik.errors.password ? (
        <small className="text-xs text-red-500">{formik.errors.password}</small>
      ) : null}
      <InputField
        label="Şifre"
        name="password"
        value={formik.values.password}
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${
          formik.touched.password && formik.errors.password
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <small className="text-xs text-red-500">
          {formik.errors.confirmPassword}
        </small>
      ) : null}
      <InputField
        label="Şifre Onay"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`${
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      <div className="w-full">
        <Button name="Kayıt Ol" />
      </div>
    </form>
  );
}

export default RegisterForm;
