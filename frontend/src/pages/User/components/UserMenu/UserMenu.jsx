import { Link } from "react-router-dom";
import { useUserState } from "../../../../Recoil/User/userState";

function userMenu() {
  const { user, setUser } = useUserState();
  
  return (
    <div className="w-full flex flex-col gap-8 text-white justify-center items-center text-center">
      {user.role === "admin" && (
        <Link to="/admin" className="py-2.5 md:py-2 hover:bg-[#cda154] w-full">
          Admin Panel
        </Link>
      )}
      <Link
        to="/user/profile"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Profil
      </Link>
      <Link
        to="/user/orders"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Siparişlerim
      </Link>
      <Link
        to="/user/edit"
        className="py-2.5 md:py-2 hover:bg-[#cda154] w-full"
      >
        Bilgileri Düzenle
      </Link>
    </div>
  );
}

export default userMenu;
