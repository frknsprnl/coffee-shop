import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useToastState } from "../../Recoil/Error/useToastState";
import { Helmet } from "react-helmet";
import coffeeImg from "../../assets/blog-image.jpg";

function Article() {
  const { setToastMsg } = useToastState();
  const location = useLocation();
  const articleId = location.pathname.split("/").pop();
  const [article, setArticle] = useState({});

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:3000/blog/article/${articleId}`)
        .then((resp) => {
          setArticle(resp.data.article);
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data });
        });
    })();
  }, []);

  return (
    <MainLayout>
      <Helmet>
        <title>{article.title + " | The Coffee Shop"}</title>
      </Helmet>
      <div className="py-4 px-2 md:px-8 flex flex-col">
        <img
          src={coffeeImg}
          className="w-full md:w-1/2 rounded-xl mx-auto grayscale-[40%] hover:grayscale-0 duration-500 bg-contain h-56 md:h-80"
          alt=""
        />
        <h1 className="text-white text-3xl text-center pt-8 pb-4">
          {article.title}
        </h1>
        <span className="text-white mx-auto text-sm md:text-base w-5/6 md:w-2/3 lg:w-1/2 py-3">
          {article.body}
        </span>
      </div>
    </MainLayout>
  );
}

export default Article;
