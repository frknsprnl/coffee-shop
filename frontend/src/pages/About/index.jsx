import React from "react";
import caffeineTable from "../../assets/caffeine-table.png";
import MainLayout from "../../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="h-full flex pt-6 pb-12 justify-center">
        <div className="w-5/6 md:w-3/6 text-white">
          <h1 className="text-2xl md:text-3xl text-center mb-4">
            <span className="text-[#cda154]">The Coffee</span> Shop
          </h1>
          <div className="flex flex-col">
            <span className="text-sm md:text-base">
              Uyandırmaya gücü yetemeyen kahvelere bir tepki olarak Türkiye’nin
              ilk yüksek kafeinli kahve markası The Coffee Shop'u 2017 senesinde
              kurduk.
            </span>
            <span className="text-sm md:text-base mt-4">
              Ayılmanın saatler sürdüğü sabahlar, uykudan erken sonlanan geceler
              ve kahve bağımlılığımız bizi saatler boyu ayakta tutacak bir
              kahvenin arayışına soktu. Bulamayınca biz yapalım dedik. Ama hafif
              bir içimle. Aylarca uğraştık, eğitimler aldık, denemeler yaptık.
              Sonunda aradığımızı yaptık. Dünyanın en yüksek kafeinli kahvesini
              rahat bir içimle sunduk.
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl text-center mt-8 mb-4">
            Dünyanın <span className="text-[#cda154]">En Güçlü Kahvesi</span>
          </h1>
          <div className="flex flex-col justify-center">
            <img
              className="my-6 md:px-36"
              src="https://cdn.shopify.com/s/files/1/2714/0802/files/coffeetowakethedead_42b46837-7978-4d7a-b2a6-d53e841b73c5_480x480.gif?v=1548072780"
              alt=""
            />

            <span className="text-sm md:text-base">
              Gıda Tarım Bakanlığının ve tüm dünyada geçerliliği olan İsviçre
              merkezli SGS Laboratuvarı'nın yaptığı testler sonucu The Coffee,
              kilogram başında <span className="font-bold">23,2 gram</span>{" "}
              kafein oranıyla rakiplerinin çok ötesinde, dünyanın en yüksek
              kafein oranına sahip kahvesi olarak zirvede bulunuyor. Bu test
              sürecini detaylıca öğrenmek için linke tıklayabilirsiniz.
            </span>

            <span className="text-sm md:text-base mt-4">
              Sahip olduğu bu yüksek kafein ise tamamiyle kullanılan
              çekirdeklerin yapısal özelliklerinden geliyor. Hiçbir şekilde
              kimyasal işlem görmeyen ve katkı maddesi içermeyen The Coffee{" "}
              <span className="font-bold">%100 doğal </span>
              haliyle sizlere sunuluyor. Yumuşak içimi ve sahip olduğu
              aromasıyla da tüm kahveseverlerin beğenisini kazanarak lezzet ve
              enerjiyi bir arada sunuyor.
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl text-center mt-8 mb-4">
            <span className="text-[#cda154]">Kafein</span> Oranı
          </h1>
          <div className="flex flex-col justify-center">
            <span className="text-sm md:text-base">
              Yüksek kafein oranını rahat bir içimle sunduğumuz The Coffee’mizi
              uzun bir kavrum maratonu sonrası 25 farklı çekirdeğin arasından
              denediğimiz harmanlar sonrası belirledik. Güney Amerika - Pasifik
              harmanına karar verildi. Kuruluşundan bu yana içilen 5 milyon
              fincan The Coffee sonucunda ise içenlerden yüksek kafeinin etkisi
              ve bu kafein oranına rağmen lezzeti ve rahat içim sunmasının
              verdiği şaşkınlık yapılan yorumların çok büyük bir kısmını
              oluşturdu.
            </span>

            <img className="my-6 md:px-36" src={caffeineTable} alt="" />

            <span className="text-sm md:text-base mt-4">
              Standart filtre kahvelerin kafein oranı %1 iken, The Coffee’nin
              kafein oranı son yapılan test sonucuna göre %2,32. Kısa bir
              hesapla bir fincan filtre kahveden alacağınız kafein miktarı 150
              mg iken The Coffee’den yapılmış bir fincan filtre kahvede bu
              miktar 350 mg’lara yaklaşıyor.
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
