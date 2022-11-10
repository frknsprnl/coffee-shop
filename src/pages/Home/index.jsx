import React from "react";
import Header from "../../layouts/Header";
import coffeeVideo from "../../assets/coffee-video.mp4";
import coffeeBean from "../../assets/coffee-bean.png";
import './style.css'

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="flex flex-col md:flex-row h-[36rem] w-full px-6">
        <div className="text-white mt-6 w-full px-8 flex md:flex-1 flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-6xl font-medium mb-5">
            Dünyanın En Güçlü Kahvesi!
          </h1>
          <span className="text-base md:text-4xl font-normal text-[#cda154]">
            YÜKSEK KAFEİN, RAHAT İÇİM
          </span>
          <div className="flex-auto mt-8">
            <button className="text-lg md:text-2xl px-6 py-4 rounded-full shadow-lg shadow-[#cda154] md:shadow-2xl md:shadow-[#cda154] hover:text-[#cda154] hover:shadow-white ">Ürünleri incele</button>
          </div>
        </div>
        <div className="relative select-none flex flex-1">
          <img
            src={coffeeBean}
            className="h-[16rem] w-[16rem] md:h-[24rem] md:w-[24rem] lg:h-[32rem] lg:w-[32rem] absolute object-cover z-10 mix-blend-multiply right-1/2 top-1/2"
            alt="coffee bean"
            draggable="false"
          />
          <video
            className="h-[15.9rem] w-[15.9rem] md:h-[23.9rem] md:w-[23.9rem] lg:h-[31.9rem] lg:w-[31.9rem]  position absolute object-cover right-1/2 top-1/2"
            autoPlay
            muted
            loop
          >
            <source src={coffeeVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Home;
