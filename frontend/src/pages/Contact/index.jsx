import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <MainLayout>
      <div className="h-full pt-2 pb-8 px-6 md:px-8 flex justify-center">
        <div className="text-white flex flex-col items-center md:w-3/6 px-6">
          <span className="text-sm md:text-base text-center">
            Dünyanın En Güçlü Kahvesi The Coffee Shop ile Yüksek Kafeinli
            Kahveler, Etkinlikler ve Haberler Hakkında Bilgi Almak için Bizimle
            İletişime Geçebilirsiniz.
          </span>

          <div className="flex flex-col text-sm md:text-base">
            <span className="mt-4">
              <span className="text-[#cda154]">Email: </span>&nbsp;
              thecoffeeshop@gmail.com
            </span>
            <span className="mt-2">
              <span className="text-[#cda154]">Telefon: </span>&nbsp; 0850 888
              2626
            </span>
          </div>
          <h1 className="text-lg md:text-2xl mt-4">
            The Coffee Shop <span className="text-[#cda154]">nerede?</span>
          </h1>
          <span className="mt-3">
            <address className="text-sm md:text-base text-center md:text-start">
              Sazova, Ulusal Egemenlik Blv., Masal Şatosu 26150 Tepebaşı /
              Eskişehir
            </address>
          </span>
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
