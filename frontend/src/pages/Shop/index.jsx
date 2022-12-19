import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ShopItem from "../../components/ShopItem";
import { useToastState } from "../../Recoil/Error/useToastState";
import { useCartState } from "../../Recoil/Cart/useCartState";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { cartProducts, setCartProducts } = useCartState();
  const { setToastMsg } = useToastState();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/product/getproducts")
        .then((resp) => {
          setProducts(resp.data.products);
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
        });
    })();

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

  const addToCart = async (productId) => {
    await axios
      .post(
        "http://localhost:3000/cart/additem",
        { product_id: productId, quantity: 1 },
        {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((resp) => {
        setToastMsg({ isError: false, message: resp.data.message });
      })
      .catch((err) => {
        if (err.response.statusText === "Unauthorized") {
          navigate("/login");
          setToastMsg({
            isError: true,
            message: "Ürün almak için giriş yapın.",
          });
        }
      });
  };
  return (
    <MainLayout>
      <div className="h-full p-8 flex gap-6 flex-wrap justify-center">
        {products.map((product) => {
          let index = cartProducts.findIndex(
            (item) => item.product._id == product._id
          );
          return (
            <ShopItem
              key={product._id}
              img={`http://localhost:3000/product/${product.productImage}`}
              name={product.name}
              price={product.price}
              quantity={cartProducts[index] ? cartProducts[index].quantity : ""}
              isInCart={
                cartProducts.some((item) => item.product._id == product._id)
                  ? true
                  : false
              }
              className="h-64 w-52 md:h-80 md:w-64"
              onClick={async () => {
                await addToCart(product._id);
                await getCart();
              }}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Shop;
