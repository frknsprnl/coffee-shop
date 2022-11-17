import React from "react";
import Header from "../../layouts/Header";

function User() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center py-4 px-4">
        <h1 className="text-2xl text-white pb-4">Hesabım</h1>
        <h1 className="text-sm text-white pb-8">Hoş geldin Furkan!</h1>
        <div className="w-5/6 md:w-3/6 flex h-96 border-[1.6px] rounded-xl">
          <div className="w-full flex flex-col gap-8 text-white justify-center items-center text-center">
            <a href="" className="py-2.5 md:py-2 hover:bg-[#cda154] w-full">
              Profil
            </a>
            <a href="" className="py-2.5 md:py-2 hover:bg-[#cda154] w-full">
              Siparişlerim
            </a>
            <a href="" className="py-2.5 md:py-2 hover:bg-[#cda154] w-full">
              Bilgileri Düzenle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
