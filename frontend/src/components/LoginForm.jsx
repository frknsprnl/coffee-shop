import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../Recoil/User/useLoginState";

function LoginForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoginState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(254, "E-mail 254 karakterden az olmalı.")
        .email("Geçersiz mail adresi.")
        .required("Bu alan zorunludur."),
      password: Yup.string()
        .max(128, "Şifre 128 karakterden az olmalı.")
        .min(6, "Şifre 6 karakterden fazla olmalı.")
        .required("Bu alan zorunludur."),
    }),
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post("http://localhost:3000/user/login", values)
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
      autoComplete="off"
      className="flex flex-col gap-4"
      noValidate
    >
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
      <div className="w-full">
        <Button name="Giriş" />
      </div>
    </form>
  );
}

export default LoginForm;
