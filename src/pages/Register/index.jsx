import React from "react";
import MainLayout from "../../layouts/MainLayout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Register() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center py-8 mt-6">
        <div className="w-[320px] md:w-[500px] border-[1.6px] px-5 md:px-10 pb-12 rounded-xl">
          <h1 className="text-xl md:text-2xl text-center text-[#cda154] py-8">
            HESAP OLUŞTUR
          </h1>
          <form action="" className="flex flex-col gap-4">
            <InputField label="Ad" />
            <InputField label="Soyad" />
            <InputField label="E-mail" />
            <InputField label="Şifre" />
            <InputField label="Şifre Tekrar" />
            <div className="w-full">
              <Button name="Kayıt Ol" />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
