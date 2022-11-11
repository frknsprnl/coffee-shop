import React from "react";
import Header from "../../layouts/Header";
import "./style.css";

function Contact() {
  return (
    <div>
      <Header />
      <div className="h-full pt-2 pb-8 px-6 md:px-8 flex justify-center">
        <div className="text-white flex flex-col items-center md:w-3/6 px-6">
          <span className="text-sm md:text-base text-center">
            Dünyanın En Güçlü Kahvesi The Coffee Shop ile Yüksek Kafeinli
            Kahveler, Etkinlikler ve Haberler Hakkında Bilgi Almak için Bizimle
            İletişime Geçebilirsiniz.
          </span>
          <h1 className="text-lg md:text-2xl mt-4">
            The Coffee Shop <span className="text-[#cda154]">nerede?</span>
          </h1>
          <span className="mt-3">
            <address className="text-sm md:text-base">
              Sazova, Ulusal Egemenlik Blv., Masal
              Şatosu 26150 Tepebaşı / Eskişehir
            </address>
          </span>
          <span className="mt-4 mr-auto">
            <span className="text-[#cda154]">Email: </span>&nbsp;
            thecoffeeshop@gmail.com
          </span>
          <span className="mt-2 mr-auto">
            <span className="text-[#cda154]">Telefon: </span>&nbsp; 0850 888
            2626
          </span>
          <form className="mt-5">
            <div className="flex flex-col flex-wrap justify-center md:flex-row gap-y-5">
              <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 flex-1">
                <div className="input-field">
                  <input
                    required
                    type="text"
                    className="form-item hover:border-[#cda154] focus:border-[#cda154]"
                  />
                  <label htmlFor="" className="">
                    Ad
                  </label>
                </div>
                <div className="input-field">
                  <input
                    required
                    type="text"
                    className="form-item hover:border-[#cda154] focus:border-[#cda154]"
                  />
                  <label htmlFor="">Soyad</label>
                </div>
              </div>
              <div className="input-field">
                <input
                  required
                  type="text"
                  className="form-item hover:border-[#cda154] focus:border-[#cda154]"
                />
                <label htmlFor="">Telefon</label>
              </div>
              <div className="input-field">
                  <textarea className="form-item hover:border-[#cda154] focus:border-[#cda154]" name="" id="" cols="30" rows="6" required ></textarea>
                  <label htmlFor="">Mesaj</label>
              </div>
              <div className="w-full">
                <button className="text-[#777] hover:text-white form-item hover:border-[#cda154] focus:border-[#cda154]">Gönder</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
