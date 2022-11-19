import React from "react";
import MainLayout from "../../layouts/MainLayout";
import coffee1 from "../../assets/1kg.png";
import coffee2 from "../../assets/500g.png";
import coffee3 from "../../assets/250g.png";

function Shop() {
  return (
    <MainLayout>
      <div className="h-full p-8 flex gap-6 flex-wrap justify-center">
        <div className="w-64 h-80 border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center">
          <img src={coffee1} alt="" className="h-32 w-32 mt-6" />
          <div className="flex flex-col items-center justify-evenly h-full">
            <span className="text-lg text-white font-semibold">
              The Coffee (1 kg)
            </span>
            <span className="text-base text-white font-medium">299.99 TL</span>
          </div>
          <div className="w-full">
            <button className="py-4 text-white w-full block border-t border-white hover:bg-[#2b2726]">
              Sepete ekle
            </button>
          </div>
        </div>

        <div className="w-64 h-80 border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center">
          <img src={coffee2} alt="" className="h-32 w-32 mt-6" />
          <div className="flex flex-col items-center justify-evenly h-full">
            <span className="text-lg text-white font-semibold">
              The Coffee (500 g)
            </span>
            <span className="text-base text-white font-medium">149.99 TL</span>
          </div>
          <div className="w-full">
            <button className="py-4 text-white w-full block border border-white hover:bg-[#2b2726]">
              Sepete ekle
            </button>
          </div>
        </div>

        <div className="w-64 h-80 border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center">
          <img src={coffee3} alt="" className="h-32 w-32 mt-6" />
          <div className="flex flex-col items-center justify-evenly h-full">
            <span className="text-lg text-white font-semibold">
              The Coffee (250 g)
            </span>
            <span className="text-base text-white font-medium">74.99 TL</span>
          </div>
          <div className="w-full">
            <button className="py-4 text-white w-full block border border-white hover:bg-[#2b2726]">
              Sepete ekle
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Shop;
