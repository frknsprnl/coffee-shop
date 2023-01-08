import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import TextAreaField from "../../../../components/TextAreaField";
import Button from "../../../../components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToastState } from "../../../../Recoil/Error/useToastState";
import { useLoadingState } from "../../../../Recoil/Loading/useLoadingState";

function Address() {
  const navigate = useNavigate();
  const { setToastMsg } = useToastState();
  const { setIsLoading } = useLoadingState();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      address: "",
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .max(254, "Adres 254 karakterden az olmalı.")
        .required("Bu alan zorunludur."),
    }),
    validateOnChange: validateAfterSubmit,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      await axios
        .post(`${import.meta.env.VITE_BASE_URL}/user/setAddress`, values, {
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
        })
        .finally(() => setIsLoading(false));
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
          {formik.errors.address ? (
            <small className="text-xs text-red-500">
              {formik.errors.address}
            </small>
          ) : null}
          <TextAreaField
            label="Adres"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            className={`resize-none ${
              formik.errors.address
                ? "border-red-500 hover:border-red-500 focus:border-red-500"
                : ""
            }`}
          />
        </div>
        <div>
          <Button
            name="Ekle / Değiştir"
            onClick={() => {
              setValidateAfterSubmit(true);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Address;
