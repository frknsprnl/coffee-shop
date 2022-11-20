import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function MainLayout({ children }) {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }, [location]);

  const pagesWithFooter = ["", "shop", "about", "blog", "contact"];
  return (
    <>
      <Header />
      {children}
      {pagesWithFooter.includes(location.pathname.split("/").pop()) && (
        <Footer />
      )}
    </>
  );
}

export default MainLayout;
