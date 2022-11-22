import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogItem from "../../components/BlogItem";

function Blog() {
  return (
    <MainLayout>
      <div className="py-6 flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </MainLayout>
  );
}

export default Blog;
