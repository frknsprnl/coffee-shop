import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ShopItem from "../../components/ShopItem";
import coffee1 from "../../assets/1kg.png";
import coffee2 from "../../assets/500g.png";
import coffee3 from "../../assets/250g.png";

function Shop() {
  return (
    <MainLayout>
      <div className="h-full p-8 flex gap-6 flex-wrap justify-center">
        <ShopItem img={coffee1} name="The Coffee (1 kg)" price="299.99" className="h-64 w-52 md:h-80 md:w-64" />
        <ShopItem img={coffee2} name="The Coffee (500 g)" price="149.99" className="h-64 w-52 md:h-80 md:w-64" />
        <ShopItem img={coffee3} name="The Coffee (250 g)" price="74.99" className="h-64 w-52 md:h-80 md:w-64" />
      </div>
    </MainLayout>
  );
}

export default Shop;
