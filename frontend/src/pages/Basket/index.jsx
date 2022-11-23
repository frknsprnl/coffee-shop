import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button";
import BasketItem from "../../components/BasketItem";

function Basket() {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row py-8 px-4 md:px-12 gap-4 justify-center">
        <div className="border-[1.6px] py-6 rounded-xl w-full md:w-1/2 text-white">
          <h1 className="text-lg md:text-xl font-semibold px-5">Sepetim</h1>
          <div className=" h-[420px] overflow-y-auto">
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
          </div>
        </div>
        <div className="border-[1.6px] h-64 p-6 rounded-xl w-full md:w-80 lg:w-96 text-white flex flex-col whitespace-nowrap">
          <h1 className="text-lg md:text-xl font-semibold">Sipariş Özeti</h1>
          <ul className="py-3 text-sm border-b border-[#cda154]">
            <li className="flex justify-between">
              <span>Ürün toplam:</span>
              <b>199.75 TL</b>
            </li>
            <li className="flex justify-between">
              <span>Kargo toplam:</span>
              <b>19.99 TL</b>
            </li>
            <li className="flex justify-between">
              <span
                title="75 TL ve Üzeri Kargo Bedava"
                className="w-40 overflow-hidden text-ellipsis"
              >
                75 TL ve Üzeri Kargo Bedava
              </span>
              <b>-19.99 TL</b>
            </li>
          </ul>
          <div className="flex justify-between py-3">
            <span>Toplam: </span>
            <b>199.75 TL</b>
          </div>
          <div className="w-full mt-auto">
            <Button name="Sepeti Onayla" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Basket;
