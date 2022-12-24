import React from "react";
import BasketItem from "../components/BasketItem";

function Cart({ cartProducts, changeValue, removeItem, sum }) {
  return (
    <>
      <div className=" h-[420px] overflow-y-auto">
        <h1 className="text-lg md:text-xl font-semibold text-center px-5">Sepetim</h1>
        {cartProducts.length === 0 && (
          <h1 className="text-base mt-6 w-full text-center">
            Sepetinizde hiç ürün yok.
          </h1>
        )}
        {sum < 200 && cartProducts.length !== 0 && (
          <h1 className="text-sm w-full text-center bg-red-500">
            Ücretsiz kargo için {(200 - sum).toFixed(2)} tutarında ürün
            eklemelisiniz.
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
    </>
  );
}

export default Cart;
