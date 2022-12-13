import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ShopItem from "../../components/ShopItem";
import { useToastState } from "../../Recoil/Error/useToastState";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);
  const { setToastMsg } = useToastState();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/product/getproducts")
        .then((resp) => {
          setProducts(resp.data.products);
        })
        .catch((err) => {
          setToastMsg({isError: true, message: err.response.data.message});
        });
    })();
  }, []);

  return (
    <MainLayout>
      <div className="h-full p-8 flex gap-6 flex-wrap justify-center">
        {products.map((product) => {
          return (
            <ShopItem
              key={product._id}
              img={`http://localhost:3000/product/${product.productImage}`}
              name={product.name}
              price={product.price}
              className="h-64 w-52 md:h-80 md:w-64"
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Shop;
