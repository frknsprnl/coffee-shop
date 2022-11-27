import MainLayout from "../../layouts/MainLayout";
import RegisterForm from "../../components/RegisterForm";

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
      </div>
    </MainLayout>
  );
}

export default Register;
