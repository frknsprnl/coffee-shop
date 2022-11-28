import MainLayout from "../../layouts/MainLayout";
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";

function Register() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center py-8 mt-6">
        <div className="w-[320px] md:w-[500px] border-[1.6px] px-5 md:px-10 pb-12 rounded-xl">
          <h1 className="text-xl md:text-2xl text-center text-[#cda154] py-6">
            HESAP OLUŞTUR
          </h1>
          <RegisterForm />
        </div>
        <span className="text-[#777] mt-3 text-sm">
          Hesabın var mı?{" "}
          <Link to="/login" className="text-[#cda154] hover:underline">
            Giriş yap
          </Link>
        </span>
      </div>
    </MainLayout>
  );
}

export default Register;
