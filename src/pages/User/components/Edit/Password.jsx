import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

function Password() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-4 py-16 text-white relative">
      <Link to="/user/edit" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5 md:gap-2">
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
        </div>
        <div>
          <button className="text-[#777] hover:text-white form-item hover:border-[#cda154] focus:border-[#cda154]">
            Gönder
          </button>
        </div>
      </form>
    </div>
  )
}

export default Password