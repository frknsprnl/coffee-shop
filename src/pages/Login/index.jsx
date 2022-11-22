import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Login() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center py-8 mt-16">
        <div className="w-[320px] md:w-[500px] border-[1.6px] px-5 md:px-10 pb-12 rounded-xl">
          <h1 className="text-2xl text-center text-[#cda154] py-8">
            GİRİŞ YAP
          </h1>
          <form action="" className="flex flex-col gap-4">
            <InputField label="E-mail" />
            <InputField label="Şifre" />
            <div className="w-full">
              <Button name="Giriş" />
            </div>
          </form>
        </div>
        <span className="text-[#777] mt-3 text-sm">
          Kayıtlı değil misin?
          <Link to="/register" className="text-[#cda154] hover:underline">
            Kayıt ol
          </Link>
        </span>
      </div>
    </MainLayout>
  );
}

export default Login;
