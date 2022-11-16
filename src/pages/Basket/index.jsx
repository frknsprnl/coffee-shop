import React from "react";
import Header from "../../layouts/Header";
import productImage from "../../assets/1kg.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Basket() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row py-8 px-4 md:px-12 gap-4 justify-center">
        <div className="border-[1.6px] py-6 rounded-xl w-1/2 text-white">
          <h1 className="text-lg md:text-xl font-semibold px-5">Sepetim</h1>
          <div className=" h-[420px] overflow-y-auto">
            <div className="flex justify-between items-center p-5">
              <img src={productImage} alt="" width={64} />
              <div className="flex flex-1 text-white px-10 justify-between">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className=" rounded-lg">
                  <button className="px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
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
            <div className="flex justify-between items-center p-5">
              <img src={productImage} alt="" width={64} />
              <div className="flex flex-1 text-white px-10 justify-between">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className=" rounded-lg">
                  <button className="px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
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
            <div className="flex justify-between items-center p-5">
              <img src={productImage} alt="" width={64} />
              <div className="flex flex-1 text-white px-10 justify-between">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className=" rounded-lg">
                  <button className="px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
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
            <div className="flex justify-between items-center p-5">
              <img src={productImage} alt="" width={64} />
              <div className="flex flex-1 text-white px-10 justify-between">
                <span className="text-sm font-medium">The Coffee (1kg)</span>
                <div className=" rounded-lg">
                  <button className="px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
                    -
                  </button>
                  <input
                    type="text"
                    className="w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
                    value={1}
                    pattern="[0-9]*"
                  />
                  <button className="px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500">
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
        <div className="border-[1.6px] h-64 p-6 rounded-xl w-1/4 text-white flex flex-col">
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
              <span title="75 TL ve Üzeri Kargo Bedava">
                75 TL ve Üzeri Kargo ...
              </span>
              <b>-19.99 TL</b>
            </li>
          </ul>
          <div className="flex justify-between py-3">
            <span>Toplam: </span>
            <b>199.75 TL</b>
          </div>
          <div className="w-full mt-auto">
            <button className="text-[#777] hover:text-white form-item hover:border-[#cda154] focus:border-[#cda154]">
              Sepeti Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
