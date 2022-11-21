import React from "react";
import coffeeVideo from "../../assets/coffee-video.mp4";
import coffeeCup from "../../assets/coffee-cup.jpg";
import shippingImg from "../../assets/shipping.jpg";
import coffeeRoast from "../../assets/coffee-roast.jpg";
import natureImg from "../../assets/nature.jpg";
import coffee2 from "../../assets/500g.png";
import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row h-[36rem] w-full px-4">
        <div className="text-white w-full flex flex-1 flex-col text-center justify-center ">
          <Fade top>
            <h1 className="text-3xl lg:text-5xl font-medium py-3">
              Dünyanın En Güçlü Kahvesi!
            </h1>
            <span className="text-xl md:text-4xl font-normal text-[#cda154] py-3">
              YÜKSEK KAFEİN, RAHAT İÇİM
            </span>
          </Fade>
          <Fade left>
            <div className="flex justify-center pt-5">
              <Link
                to="/shop"
                className="text-[#777] hover:text-white form-item hover:border-[#cda154] focus:border-[#cda154] text-center text-lg max-w-[180px] md:max-w-[200px] lg:max-w-[230px]"
              >
                Ürünleri İncele
              </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="py-8 px-24 hidden lg:block">
              <span className="text-center">
                2016 yılında, %100 doğal bir şekilde yüksek kafeini yumuşak bir
                içimle sunabileceğimiz özel bir kahve yapmak için
                çalışmalarımızı başlattık. Uzun çalışmaların ve sayısız
                denemelerin ardından aradığımız eşsiz kahve harmanımızı bulduk
                ve İsviçre merkezli SGS Gıda Kontrol Laboratuvarı’na kafein
                testine gönderdik. Ve sonuç beklediğimiz gibi: The Coffee,
                dünyanın açık ara en güçlü kahvesi!
              </span>
            </div>
          </Fade>
        </div>
        <div className="relative select-none flex flex-1">
          <img
            src={coffeeCup}
            className="h-[17.5rem] w-[17.5rem] md:h-[24rem] md:w-[24rem] lg:h-[32rem] lg:w-[32rem] absolute object-cover z-10 mix-blend-multiply right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
            alt="coffee bean"
            draggable="false"
          />
          <video
            className="h-[17.4rem] w-[17.4rem] md:h-[23.9rem] md:w-[23.9rem] lg:h-[31.9rem] lg:w-[31.9rem]  position absolute object-cover right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2"
            autoPlay
            muted
            loop
          >
            <source src={coffeeVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="py-4 md:py-4 px-4 md:px-8">
        <h1 className="text-[#cda154] text-lg md:text-2xl text-center">
          -En Çok Satın Alınan Ürünler-
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-8">
          <div className="w-52 h-56 border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center">
            <img src={coffee2} alt="" className="h-24 w-24 mt-6" />
            <div className="flex flex-col items-center justify-evenly h-full">
              <span className="text-base md:text-lg text-white font-semibold">
                The Coffee (500 g)
              </span>
              <span className="text-sm md:text-base text-white font-medium">
                149.99 TL
              </span>
            </div>
          </div>
          <div className="w-52 h-56 border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center">
            <img src={coffee2} alt="" className="h-24 w-24 mt-6" />
            <div className="flex flex-col items-center justify-evenly h-full">
              <span className="text-base md:text-lg text-white font-semibold">
                The Coffee (500 g)
              </span>
              <span className="text-sm md:text-base text-white font-medium">
                149.99 TL
              </span>
            </div>
          </div>
          <div className="w-52 h-56 border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center">
            <img src={coffee2} alt="" className="h-24 w-24 mt-6" />
            <div className="flex flex-col items-center justify-evenly h-full">
              <span className="text-base md:text-lg text-white font-semibold">
                The Coffee (500 g)
              </span>
              <span className="text-sm md:text-base text-white font-medium">
                149.99 TL
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 md:py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row py-2 md:py-6">
          <Fade left>
            <img
              src={natureImg}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl"
            />
          </Fade>
          <Fade top>
            <div className="flex flex-col items-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - En Güçlü Kahve -
              </h1>
              <h1 className="text-white text-2xl md:text-3xl">%100 Doğal</h1>
              <p className="text-white py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                The Coffee'nin yüksek kafein oranı, harmanındaki kahve
                çekirdeklerinden gelir. Kahvelerimize herhangi bir kimyasal
                işlem uygulanmamıştır ve içerisine katkı maddesi eklenmemiştir.
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row py-2 md:py-6">
          <Fade top>
            <div className="flex flex-col items-center w-full py-6 md:py-0 order-2 md:order-1">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - En Taze Kahve -
              </h1>
              <h1 className="text-white text-2xl md:text-3xl">
                Haftalık Kahve
              </h1>
              <p className="text-white py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                Eskişehir'de yer alan kahve fabrikamızda kahvelerimizi haftalık
                olarak kavuruyor, sipariş üzerine öğütüyor ve en taze haliyle
                gönderiyoruz.
              </p>
            </div>
          </Fade>
          <Fade right>
            <img
              src={coffeeRoast}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl order-1 md:order-2"
            />
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row pt-2 pb-0 md:py-6">
          <Fade left>
            <img
              src={shippingImg}
              alt=""
              className="h-52 md:h-64 lg:h-96 rounded-xl"
            />
          </Fade>
          <Fade top>
            <div className="flex flex-col items-center w-full py-6 md:py-0">
              <h1 className="text-[#cda154] text-base md:text-xl">
                - Hızlı ve Ücretsiz Kargo -
              </h1>
              <h1 className="text-white text-2xl md:text-3xl">
                Sorunsuz Teslimat
              </h1>
              <p className="text-white py-4 md:py-6 text-sm md:text-lg leading-7 md:leading-9 text-center max-w-xl">
                Hafta içi saat 14.00’e kadar verilen siparişleri aynı gün
                kargoya teslim ediyoruz. Sevkiyat sırasında meydana gelebilecek
                problemleri profesyonel destek ekibimizle çözüme kavuşturuyoruz.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
