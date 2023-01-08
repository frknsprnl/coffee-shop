import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useCartState } from "../../Recoil/Cart/useCartState";
import { useToastState } from "../../Recoil/Error/useToastState";
import Cart from "../../components/Cart";
import Payment from "../../components/Payment";
import { useNavigate } from "react-router-dom";

function Basket() {
  const { cartProducts, setCartProducts } = useCartState();
  const { setToastMsg } = useToastState();
  const [isShippingFree, setIsShippingFree] = useState(false);
  const [sum, setSum] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(19.99);
  const [isPayment, setIsPayment] = useState(
    JSON.parse(localStorage.getItem("isPayment")) || false
  );
  const [formData, setFormData] = useState({
    cardNum: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/cart/getitems`, {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
        },
      })
      .then((resp) => {
        //console.log(resp.data.cart);
        setCartProducts(resp.data.cart);
      })
      .catch((err) => {
        // console.log(err.response.data);
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
          `${import.meta.env.VITE_BASE_URL}/cart/additem`,
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
          // console.log(err);
        });
    }
  };

  const removeItem = async (productId) => {
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/cart/removeitem`,
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
        // console.log(err);
      });
  };

  const isPaymentPage = (bool) => {
    setIsPayment(bool);
    localStorage.setItem("isPayment", bool);
  };

  const removeCart = async () => {
    setCartProducts([]);
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/cart/removecart`, "", {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
        },
      })
      .then((resp) => {
        // console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  const completePayment = async (products, total) => {
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/orders/setorder`,
        { products, total },
        {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then(async (resp) => {
        localStorage.setItem("isPayment", false);
        await removeCart();
        navigate("/user/orders");
        setToastMsg({ isError: false, message: resp.data.message });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row py-8 px-4 md:px-12 gap-4 justify-center">
        <div className="border-[1.6px] py-6 rounded-xl w-full md:w-1/2 text-white relative">
          {isPayment === true && (
            <button
              className="absolute top-5 left-5 text-white"
              onClick={() => isPaymentPage(false)}
            >
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="text-3xl hover:text-[#cda154]"
              />
            </button>
          )}
          {isPayment === false && (
            <Cart
              cartProducts={cartProducts}
              sum={sum}
              removeItem={removeItem}
              changeValue={changeValue}
            />
          )}
          {isPayment === true && (
            <Payment formData={formData} setFormData={setFormData} />
          )}
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
            {isPayment === false && (
              <Button
                name="Sepeti Onayla"
                onClick={() => {
                  cartProducts.length !== 0
                    ? isPaymentPage(true)
                    : (isPaymentPage(false),
                      setToastMsg({
                        isError: true,
                        message: "Satın almak için ürün ekleyin.",
                      }));
                }}
              />
            )}
            {isPayment === true && (
              <Button
                name="Sepeti Tamamla"
                onClick={
                  !Object.values(formData).some((value) => value === "")
                    ? () =>
                        completePayment(
                          cartProducts.map((item) => ({
                            product: item.product._id,
                            quantity: item.quantity,
                          })),
                          total
                        )
                    : () => {}
                }
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Basket;
