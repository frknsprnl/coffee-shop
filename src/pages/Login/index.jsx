import React from "react";
import Header from "../../layouts/Header";

function Login() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-8 mt-16">
        <div className="w-[320px] md:w-[500px] border-[1.6px] px-5 md:px-10 pb-12 rounded-xl">
          <h1 className="text-2xl text-center text-[#cda154] py-8">GİRİŞ YAP</h1>
          <form action="" className="flex flex-col gap-4">
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
            <div className="w-full">
              <button className="text-[#777] hover:text-white form-item hover:border-[#cda154] focus:border-[#cda154]">
                Giriş
              </button>
            </div>
          </form>
        </div>
        <span className="text-[#777] mt-3 text-sm">Kayıtlı değil misin? <a href="" className="text-[#cda154] hover:underline">Kayıt ol</a> </span>
      </div>
    </>
  );
}

export default Login;
