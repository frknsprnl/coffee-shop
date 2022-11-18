import React from "react";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
          <div className="input-field">
            <input
              required
              type="text"
              className="form-item hover:border-[#cda154] focus:border-[#cda154] pointer-events-none text-center"
              value="Furkan"
            />
            <label htmlFor="">Ad</label>
          </div>
          <div className="input-field">
            <input
              required
              type="text"
              className="form-item hover:border-[#cda154] focus:border-[#cda154] pointer-events-none text-center"
              value="Süpürenel"
            />
            <label htmlFor="">Soyad</label>
          </div>
        </div>
        <div className="input-field">
          <input
            required
            type="text"
            className="form-item hover:border-[#cda154] focus:border-[#cda154] pointer-events-none text-center"
            value="frknsprnl@hotmail.com"
          />
          <label htmlFor="">E-mail</label>
        </div>
        <div className="input-field">
          <textarea
            className="form-item hover:border-[#cda154] focus:border-[#cda154] pointer-events-none text-center"
            name=""
            id=""
            cols="30"
            rows="3"
            value="26985 Brighton Lane, Lake Forest, CA 92630."
            required
          ></textarea>
          <label htmlFor="">Adres</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
