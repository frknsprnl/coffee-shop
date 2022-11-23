import React from "react";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import InputField from "../../../../components/InputField";
import TextAreaField from "../../../../components/TextAreaField";

function Profile() {
  return (
    <div className="h-full w-full flex flex-col items-center px-4 text-white relative">
      <Link to="/user" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <div className="flex flex-col gap-5 h-full justify-center">
        <div className="flex gap-2">
          <InputField
            label="Ad"
            className="pointer-events-none text-center"
            value="Furkan"
          />
          <InputField
            label="Soyad"
            className="pointer-events-none text-center"
            value="Süpürenel"
          />
        </div>
        <InputField
          label="E-mail"
          className="pointer-events-none text-center"
          value="frknsprnl@hotmail.com"
        />
        <TextAreaField
          label="Adres"
          className="pointer-events-none text-center"
          value="26985 Brighton Lane, Lake Forest, CA 92630."
        />
      </div>
    </div>
  );
}

export default Profile;
