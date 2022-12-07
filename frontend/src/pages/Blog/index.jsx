import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogItem from "../../components/BlogItem";
import axios from "axios";
import { useToastState } from "../../Recoil/Error/useToastState";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const { setToastMsg } = useToastState();

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3000/blog/articles")
        .then((resp) => {
          setBlogs(resp.data.articles);
        })
        .catch((err) => {
          setToastMsg({ isError: true, message: err.response.data.message });
        });
    })();
  }, []);

  return (
    <MainLayout>
      <div className="py-6 flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
        {blogs.map((blog) => {
          return (
            <BlogItem key={blog._id} articleId={blog._id} title={blog.title} body={blog.body} />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Blog;
