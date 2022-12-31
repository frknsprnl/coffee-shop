import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import InputField from "../../../../components/InputField";
import TextAreaField from "../../../../components/TextAreaField";
import { useUserState } from "../../../../Recoil/User/userState";

function Profile() {
  const { user } = useUserState();

  return (
    <div className="h-full w-full flex flex-col items-center px-4 text-white relative">
      <Link to="/user" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <div className="flex flex-col gap-5 h-full justify-center w-full md:w-4/5">
        <div className="flex gap-2">
          <InputField
            label="Ad"
            className="pointer-events-none text-center"
            defaultValue={user.name}
          />
          <InputField
            label="Soyad"
            className="pointer-events-none text-center"
            defaultValue={user.surname}
          />
        </div>
        <InputField
          label="E-mail"
          className="pointer-events-none text-center"
          defaultValue={user.email}
        />
        <TextAreaField
          label="Adres"
          className="pointer-events-none text-center"
          defaultValue={user.address}
        />
      </div>
    </div>
  );
}

export default Profile;
