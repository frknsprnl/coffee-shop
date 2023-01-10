import React from "react";
import { Link } from "react-router-dom";
import FacebookSVG from "../../assets/brand-logos/FacebookSVG";
import TwitterSVG from "../../assets/brand-logos/TwitterSVG";
import InstagramSVG from "../../assets/brand-logos/InstagramSVG";
import { useLoginState } from "../../Recoil/User/useLoginState";

function Footer() {
  const { isLoggedIn } = useLoginState();
  return (
    <div className="border-t-[1px] border-[#323232] mt-12 px-6 py-6 md:pt-10">
      <div className="flex flex-col md:flex-row justify-start md:justify-evenly py-6 gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">
            Sosyal Medya
          </h1>
          <div className="flex gap-2 text-white">
            <a
              href="https://www.facebook.com/frknsprnl/"
              target="_blank"
              className="p-1.5 rounded-full border-[1.6px] hover:bg-[#3b5998] hover:border-[#3b5998] duration-500"
            >
              <FacebookSVG size="16" fill="#fff" />
            </a>

            <a
              href="https://twitter.com/frknsprnl"
              target="_blank"
              className="p-1.5 rounded-full border-[1.6px] hover:bg-[#1da1f2] hover:border-[#1da1f2] duration-500"
            >
              <TwitterSVG size="16" fill="#fff" />
            </a>

            <a
              href="https://www.instagram.com/frknsprnl/"
              target="_blank"
              className="p-1.5 rounded-full border-[1.6px] hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800 via-pink-600 to-yellow-300 hover:border-pink-900 duration-500"
            >
              <InstagramSVG size="16" fill="#fff" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">
            Çok satanlar
          </h1>
          <div className="flex flex-col text-sm md:text-base text-white">
            <Link to="/shop" className="py-2 hover:text-[#cda154]">
              The Coffee 250g
            </Link>
            <Link to="/shop" className="py-2 hover:text-[#cda154]">
              The Coffee 1kg
            </Link>
            <Link to="/shop" className="py-2 hover:text-[#cda154]">
              The Coffee French Press seti
            </Link>
            <Link to="/shop" className="py-2 hover:text-[#cda154]">
              The Coffee Başlangıç Seti
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">Öğren</h1>
          <div className="flex flex-col text-sm md:text-base text-white">
            <Link to="/blog" className="py-2 hover:text-[#cda154]">
              Blog
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-base font-semibold text-gray-600">Kurumsal</h1>
          <div className="flex flex-col text-sm md:text-base text-white">
            <Link to="/about" className="py-2 hover:text-[#cda154]">
              Hakkımızda
            </Link>
            <Link to="/contact" className="py-2 hover:text-[#cda154]">
              İletişim
            </Link>
          </div>
        </div>
        {isLoggedIn && (
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-semibold text-gray-600">Hesabım</h1>
            <div className="flex flex-col text-sm md:text-base text-white">
              <Link to="/user/profile" className="py-2 hover:text-[#cda154]">
                Profil
              </Link>
              <Link to="/user/orders" className="py-2 hover:text-[#cda154]">
                Siparişlerim
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-6 justify-between md:justify-center text-sm text-gray-600">
        <span>The Coffee Shop© </span>
        <span className="text-gray-300">
          Github:{" "}
          <a
            target="_blank"
            href="https://github.com/frknsprnl"
            className="hover:underline hover:text-[#cda154]"
          >
            frknsprnl
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
