import React from "react";
import Header from "../../layouts/Header";
import image from "../../assets/blog-image.jpg";

function Blog() {
  return (
    <div>
      <Header />
      <div className="py-6 flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
        <div className="border-[1.6px] w-72 md:w-96 h-[27rem] rounded-xl overflow-hidden grayscale-[60%] hover:grayscale-0 hover:border-[#cda154] duration-700">
          <a href="" className="flex flex-col px-2">
            <img src={image} alt="" className="w-full h-52 object-fill rounded-br-lg rounded-bl-lg" />
            <h1 className="text-white text-lg md:text-2xl mt-3 text-center md:px-14">
              Cold Brew Nedir? Nasıl yapılır?
            </h1>
            <span className="text-sm text-white text-center mt-4 px-2">Yaz sezonu gelirken filtre kahveler de yavaş yavaş yerini cold brewe bıraktı. Bu yazıda cold brew nedir, cold brew nasıl yapılır gibi soruların cev...</span>
          </a>
        </div>
        <div className="border-[1.6px] w-72 md:w-96 h-[27rem] rounded-xl overflow-hidden grayscale-[60%] hover:grayscale-0 hover:border-[#cda154] duration-700">
          <a href="" className="flex flex-col px-2">
            <img src={image} alt="" className="w-full h-52 object-fill rounded-br-lg rounded-bl-lg" />
            <h1 className="text-white text-lg md:text-2xl mt-3 text-center md:px-14">
              Cold Brew Nedir? Nasıl yapılır?
            </h1>
            <span className="text-sm text-white text-center mt-4 px-2">Yaz sezonu gelirken filtre kahveler de yavaş yavaş yerini cold brewe bıraktı. Bu yazıda cold brew nedir, cold brew nasıl yapılır gibi soruların cev...</span>
          </a>
        </div>
        <div className="border-[1.6px] w-72 md:w-96 h-[27rem] rounded-xl overflow-hidden grayscale-[60%] hover:grayscale-0 hover:border-[#cda154] duration-700">
          <a href="" className="flex flex-col px-2">
            <img src={image} alt="" className="w-full h-52 object-fill rounded-br-lg rounded-bl-lg" />
            <h1 className="text-white text-lg md:text-2xl mt-3 text-center md:px-14">
              Cold Brew Nedir? Nasıl yapılır?
            </h1>
            <span className="text-sm text-white text-center mt-4 px-2">Yaz sezonu gelirken filtre kahveler de yavaş yavaş yerini cold brewe bıraktı. Bu yazıda cold brew nedir, cold brew nasıl yapılır gibi soruların cev...</span>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Blog;
