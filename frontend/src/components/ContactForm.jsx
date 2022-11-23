import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "./Button";

function ContactForm() {
  return (
    <form className="mt-5">
      <div className="flex flex-col flex-wrap justify-center md:flex-row gap-y-5">
        <div className="flex flex-col md:flex-row gap-x-3 gap-y-5 flex-1">
          <InputField label="Ad" />
          <InputField label="Soyad" />
        </div>
        <InputField label="Telefon" />
        <TextAreaField label="Mesaj" />
        <div className="w-full">
          <Button name="Gönder" />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
