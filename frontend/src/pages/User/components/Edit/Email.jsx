import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import InputField from "../../../../components/InputField";
import Button from "../../../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToastState } from "../../../../Recoil/Error/useToastState";

function Email() {
  const navigate = useNavigate();
  const { setToastMsg } = useToastState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      emailConfirm: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(254, "E-mail 254 karakterden az olmalı.")
        .email("Geçersiz mail adresi.")
        .required("Bu alan zorunludur."),
      emailConfirm: Yup.string()
        .max(254, "E-mail 254 karakterden az olmalı.")
        .oneOf([Yup.ref("email"), null], "Mail adresleri uyuşmuyor.")
        .email("Geçersiz mail adresi.")
        .required("Bu alan zorunludur."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      await axios
        .post("http://localhost:3000/user/changemail", values, {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        })
        .then((resp) => {
          resetForm();
          navigate("/user");
          setToastMsg({ isError: false, message: resp.data.message });
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
        });
    },
  });

  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-4 py-16 text-white relative">
      <Link to="/user/edit" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-5 w-full md:w-4/5"
        autoComplete="off"
        noValidate
      >
        <div
          className={`flex flex-col ${
            Object.keys(formik.errors).length > 0 ? "gap-2.5" : "gap-4"
          }`}
        >
          {formik.errors.email ? (
            <small className="text-xs text-red-500">
              {formik.errors.email}
            </small>
          ) : null}
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
          {formik.errors.emailConfirm ? (
            <small className="text-xs text-red-500">
              {formik.errors.emailConfirm}
            </small>
          ) : null}
          <InputField
            label="E-mail Tekrar"
            name="emailConfirm"
            value={formik.values.emailConfirm}
            onChange={formik.handleChange}
            className={`${
              formik.errors.emailConfirm
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
        </div>
        <div>
          <Button
            name="Değiştir"
            onClick={() => {
              setValidateAfterSubmit(true);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Email;
