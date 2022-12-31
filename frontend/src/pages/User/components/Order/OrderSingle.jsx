import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Helmet } from "react-helmet";

function OrderSingle() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({ products: [] });

  useEffect(() => {
    if (orderId) {
      (async () => {
        await axios
          .get(`http://localhost:3000/orders/getorder/${orderId}`, {
            headers: {
              "x-access-token": `${localStorage.getItem("access-token")}`,
            },
          })
          .then((resp) => {
            console.log(resp.data.orders);
            setOrder(resp.data.orders);
          })
          .catch((err) => console.log(err));
      })();
    }
  }, []);

  return (
    <div className="h-full w-full p-4 text-white relative">
      <Helmet>
        <title>Order | The Coffee Shop</title>
      </Helmet>
      <Link to="/user/orders" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <div className="flex flex-col gap-2 md:flex-row items-end md:justify-evenly text-sm md:text-base">
        <div className="flex flex-col justify-center items-center">
          <span className="text-[#cda154]">Tarih</span>
          <span className="text-xs md:text-sm">
            {new Date(Date.parse(order.date)).toLocaleDateString(
              {},
              {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }
            )}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[#cda154]">No.</span>
          <span className="text-xs md:text-sm">{order._id}</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-[#cda154]">Özet</span>
          <span className="text-xs md:text-sm">
            {order.products
              ? order.products.reduce((sum, acc) => sum + acc.quantity, 0)
              : "0"}{" "}
            ürün
          </span>
        </div>
      </div>
      <div className="overflow-y-auto w-full md:w-4/5 mx-auto h-56 flex flex-col gap-2 mt-8">
        {order.products.map((product) => (
          <div
            className="flex justify-between items-center px-4 py-2 rounded-xl border-[1.6px] hover:border-[#cda154]"
            key={product._id}
          >
            <img
              src={`http://localhost:3000/product/${product.product.productImage}`}
              alt=""
              className="w-10 md:w-12"
            />
            <span className="text-xs md:text-sm px-3 md:px-12">
              {product.quantity}
            </span>
            <span className="text-xs md:text-sm flex-1 text-center">
              {product.product.name}
            </span>
            <div className="flex items-center">
              <span className="text-xs md:text-sm font-semibold">
                {product.product.price.toFixed(2)} TL
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-24 mt-5 md:bottom-5 md:top-auto left-5">
        <span className="text-[#cda154] text-sm md:text-base">
          Toplam:{" "}
          <span className="text-white text-xs md:text-base font-semibold">
            {Number(order.total).toFixed(2)} TL
          </span>
        </span>
      </div>
    </div>
  );
}

export default OrderSingle;
