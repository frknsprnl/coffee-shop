import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import coffeeCup from "../../assets/coffee-cup.jpg";

function Error() {
  return (
    <MainLayout>
      <div className="p-8 h-[540px] flex flex-col items-center">
        <h1 className="text-white text-5xl py-6">
          <span className="text-[#cda154]">404</span> - Aradığın sayfayı
          bulamadık!
        </h1>
        <Link to="/" className="py-6 text-[#cda154]">
          <Button name="Ana sayfaya dön" className="px-4" />
        </Link>
        <img src={coffeeCup} alt="" className="h-20 animate-pulse" />
      </div>
    </MainLayout>
  );
}

export default Error;
