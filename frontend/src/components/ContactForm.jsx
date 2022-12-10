import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useToastState } from "../Recoil/Error/useToastState";
import { useLoadingState } from "../Recoil/Loading/useLoadingState";

function ContactForm() {
  const { setToastMsg } = useToastState();
  const { setIsLoading } = useLoadingState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "İsim 20 karakterden az olmalı.")
        .required("Bu alan zorunludur."),
      surname: Yup.string()
        .max(20, "Soyad 20 karakterden az olmalı.")
        .required("Bu alan zorunludur."),
      email: Yup.string()
        .email("Geçersiz mail adresi.")
        .required("Bu alan zorunludur."),
      message: Yup.string()
        .max(500, "Mesaj 500 karakteri geçemez.")
        .required("Bu alan zorunludur."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      await axios
        .post("http://localhost:3000/mail/sendmail", values)
        .then((resp) => {
          console.log(resp);
          setToastMsg({ isError: false, message: resp.data.message });
          resetForm();
        })
        .catch((err) => {
          console.log(err)
          setToastMsg({ isError: true, message: err.response.data.message });
        }).finally(() => {
          setIsLoading(false);
        })
    },
  });
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center mt-5 gap-2"
    >
      <div className="flex flex-col md:flex-row gap-x-3 gap-y-2">
        <div className="flex flex-col flex-1 gap-y-2">
          <small className="text-xs text-red-500 flex-1">
            {formik.errors.name ? formik.errors.name : null}
          </small>
          <InputField
            label="Ad"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={`${
              formik.errors.name
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
        </div>
        <div className="flex flex-col flex-1 gap-y-2">
          <small className="text-xs text-red-500 flex-1">
            {formik.errors.surname ? formik.errors.surname : null}
          </small>
          <InputField
            label="Soyad"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            className={`${
              formik.errors.surname
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
        </div>
      </div>
      <small className="text-xs text-red-500">
        {formik.errors.email ? formik.errors.email : null}
      </small>
      <InputField
        label="E-mail"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={`${
          formik.errors.email
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      <small className="text-xs text-red-500">
        {formik.errors.message ? formik.errors.message : null}
      </small>
      <TextAreaField
        label="Mesaj"
        name="message"
        value={formik.values.message}
        title=""
        onChange={formik.handleChange}
        className={`resize-none ${
          formik.errors.message
            ? "border-red-500 hover:border-red-500 focus:border-red-500"
            : ""
        }`}
      />
      <div className="w-full mt-2">
        <Button
          name="Gönder"
          onClick={() => {
            setValidateAfterSubmit(true);
          }}
        />
      </div>
    </form>
  );
}

export default ContactForm;
