import React from "react";
import productImage from "../../assets/1kg.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button";

function Basket() {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row py-8 px-4 md:px-12 gap-4 justify-center">
        <div className="border-[1.6px] py-6 rounded-xl w-full md:w-1/2 text-white">
          <h1 className="text-lg md:text-xl font-semibold px-5">Sepetim</h1>
          <div className=" h-[420px] overflow-y-auto">
            <div className="flex justify-between items-center p-4 md:p-5">
              <img src={productImage} alt="" className="w-12 md:w-16" />
              <div className="flex flex-1 text-white px-2 md:px-2 lg:px-10 justify-between items-center">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className="whitespace-nowrap rounded-lg">
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-5 md:w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    +
                  </button>
                </div>
              </div>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="px-2 hover:text-red-500"
                />
              </button>
            </div>
            <div className="flex justify-between items-center p-4 md:p-5">
              <img src={productImage} alt="" className="w-12 md:w-16" />
              <div className="flex flex-1 text-white px-2 md:px-2 lg:px-10 justify-between items-center">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className="whitespace-nowrap rounded-lg">
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-5 md:w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    +
                  </button>
                </div>
              </div>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="px-2 hover:text-red-500"
                />
              </button>
            </div>
            <div className="flex justify-between items-center p-4 md:p-5">
              <img src={productImage} alt="" className="w-12 md:w-16" />
              <div className="flex flex-1 text-white px-2 md:px-2 lg:px-10 justify-between items-center">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className="whitespace-nowrap rounded-lg">
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-5 md:w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    +
                  </button>
                </div>
              </div>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="px-2 hover:text-red-500"
                />
              </button>
            </div>
            <div className="flex justify-between items-center p-4 md:p-5">
              <img src={productImage} alt="" className="w-12 md:w-16" />
              <div className="flex flex-1 text-white px-2 md:px-2 lg:px-10 justify-between items-center">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className="whitespace-nowrap rounded-lg">
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-5 md:w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-1.5 md:px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    +
                  </button>
                </div>
              </div>
              <button>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="px-2 hover:text-red-500"
                />
              </button>
            </div>
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
