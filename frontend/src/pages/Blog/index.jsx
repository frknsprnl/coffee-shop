import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogItem from "../../components/BlogItem";
import axios from "axios";
import { useToastState } from "../../Recoil/Error/useToastState";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [blogCount, setBlogCount] = useState(0);
  const [blogLimit, setBlogLimit] = useState(1);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || 1
  );
  const { setToastMsg } = useToastState();

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:3000/blog/articles?currentPage=${currentPage}`)
        .then((resp) => {
          setBlogs(resp.data.articles);
          setBlogCount(resp.data.articleCount);
          setBlogLimit(resp.data.articleLimit);
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
          localStorage.removeItem("currentPage");
        });
    })();
  }, [currentPage]);

  return (
    <MainLayout>
      <div className="py-6 flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
        {blogs.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              articleId={blog._id}
              title={blog.title}
              body={blog.body}
              image={blog.image}
            />
          );
        })}
      </div>
      <div className="text-center">
        <Pagination
          currentPage={currentPage}
          total={blogCount}
          limit={blogLimit}
          onPageChange={(page) => {
            setCurrentPage(page);
            localStorage.setItem("currentPage", page);
            setSearchParams({ ["currentPage"]: page });
          }}
        />
      </div>
    </MainLayout>
  );
}

export default Blog;
