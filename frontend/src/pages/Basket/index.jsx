import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button";
import BasketItem from "../../components/BasketItem";
import axios from "axios";
import { useCartState } from "../../Recoil/Cart/useCartState";
import { useToastState } from "../../Recoil/Error/useToastState";

function Basket() {
  const { cartProducts, setCartProducts } = useCartState();
  const { setToastMsg } = useToastState();
  const [isShippingFree, setIsShippingFree] = useState(false);
  const [sum, setSum] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(19.99);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    await axios
      .get("http://localhost:3000/cart/getitems", {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
        },
      })
      .then((resp) => {
        //console.log(resp.data.cart);
        setCartProducts(resp.data.cart);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    // console.log(cartProducts);
    calculateTotal();
  }, [cartProducts]);

  const calculateTotal = () => {
    let sumOfItems = cartProducts.reduce(
      (sum, value) => sum + value.product.price * value.quantity,
      0
    );
    setSum(sumOfItems);
  };

  useEffect(() => {
    if (sum >= 200) {
      setIsShippingFree(true);
      setTotal(sum);
    } else {
      setIsShippingFree(false);
      if (cartProducts.length === 0) {
        setTotal(sum);
      } else {
        setTotal(sum + shippingPrice);
      }
    }
  }, [sum]);

  const changeValue = async (productId, inc) => {
    let inputValue = document.getElementById(productId).value;
    if ((inc === false && inputValue > 1) || inc === true) {
      await axios
        .post(
          "http://localhost:3000/cart/additem",
          { product_id: productId, quantity: inc ? 1 : -1 },
          {
            headers: {
              "x-access-token": `${localStorage.getItem("access-token")}`,
            },
          }
        )
        .then(async (resp) => {
          // setToastMsg({ isError: false, message: resp.data.message });
          await getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const removeItem = async (productId) => {
    await axios
      .post(
        "http://localhost:3000/cart/removeitem",
        { product_id: productId },
        {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((resp) => {
        setToastMsg({ isError: false, message: resp.data.message });
        getCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row py-8 px-4 md:px-12 gap-4 justify-center">
        <div className="border-[1.6px] py-6 rounded-xl w-full md:w-1/2 text-white">
          <h1 className="text-lg md:text-xl font-semibold px-5">Sepetim</h1>
          <div className=" h-[420px] overflow-y-auto">
            {cartProducts.length === 0 && (
              <h1 className="text-base mt-6 w-full text-center">
                Sepetinizde hiç ürün yok.
              </h1>
            )}
            {sum < 200 && cartProducts.length !== 0 && (
              <h1 className="text-sm w-full text-center bg-red-500">
                Ücretsiz kargo için {(200 - sum).toFixed(2)} tutarında ürün eklemelisiniz.
              </h1>
            )}
            {cartProducts.map((item) => {
              return (
                <BasketItem
                  key={item.product._id}
                  id={item.product._id}
                  name={item.product.name}
                  image={item.product.productImage}
                  value={item.quantity}
                  increment={() => changeValue(item.product._id, true)}
                  decrement={() => changeValue(item.product._id, false)}
                  remove={() => {
                    removeItem(item.product._id);
                  }}
                  readOnly
                />
              );
            })}
          </div>
        </div>
        <div className="border-[1.6px] h-64 p-6 rounded-xl w-full md:w-80 lg:w-96 text-white flex flex-col whitespace-nowrap">
          <h1 className="text-lg md:text-xl font-semibold">Sipariş Özeti</h1>
          <ul className="py-3 text-sm border-b border-[#cda154]">
            <li className="flex justify-between">
              <span>Ürün toplam:</span>
              <b>{sum.toFixed(2)} TL</b>
            </li>
            {cartProducts.length !== 0 && (
              <li className="flex justify-between">
                <span>Kargo toplam:</span>
                <b>{shippingPrice} TL</b>
              </li>
            )}
            {isShippingFree && (
              <>
                <li className="flex justify-between">
                  <span
                    title="200 TL ve Üzeri Kargo Bedava"
                    className="w-40 overflow-hidden text-ellipsis"
                  >
                    200 TL ve Üzeri Kargo Bedava
                  </span>
                  <b>-{shippingPrice} TL</b>
                </li>
              </>
            )}
          </ul>
          <div className="flex justify-between py-3">
            <span>Toplam: </span>
            <b>{total.toFixed(2)} TL</b>
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
