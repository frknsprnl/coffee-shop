import React from "react";
import Header from "../../layouts/Header";

function Register() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-8 mt-6">
        <div className="w-[320px] md:w-[500px] border-[1.6px] px-5 md:px-10 pb-12 rounded-xl">
          <h1 className="text-xl md:text-2xl text-center text-[#cda154] py-8">HESAP OLUŞTUR</h1>
          <form action="" className="flex flex-col gap-4">
            <div className="input-field">
              <input
                required
                type="text"
                className="form-item hover:border-[#cda154] focus:border-[#cda154]"
              />
              <label htmlFor="">Ad</label>
            </div>
            <div className="input-field">
              <input
                required
                type="text"
                className="form-item hover:border-[#cda154] focus:border-[#cda154]"
              />
              <label htmlFor="">Soyad</label>
            </div>
            <div className="input-field">
              <input
                required
                type="text"
                className="form-item hover:border-[#cda154] focus:border-[#cda154]"
              />
              <label htmlFor="">E-mail</label>
            </div>
            <div className="input-field">
              <input
                required
                type="text"
                className="form-item hover:border-[#cda154] focus:border-[#cda154]"
              />
              <label htmlFor="">Şifre</label>
            </div>
            <div className="input-field">
              <input
                required
                type="text"
                className="form-item hover:border-[#cda154] focus:border-[#cda154]"
              />
              <label htmlFor="">Şifre Tekrar</label>
            </div>
            <div className="w-full">
              <button className="text-[#777] hover:text-white form-item hover:border-[#cda154] focus:border-[#cda154]">
                Kayıt ol
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
