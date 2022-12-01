import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToastState } from "../../Recoil/Error/useToastState";

function MainLayout({ children }) {
  const location = useLocation();
  const { toastMsg, setToastMsg } = useToastState();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const notifyError = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);

    const defaultValues = {isError: false, message: ""}

    if (toastMsg.isError === true) {
      notifyError(toastMsg.message);
      setToastMsg(defaultValues);
    } else if (toastMsg.isError === false && toastMsg.message) {
      notifySuccess(toastMsg.message);
      setToastMsg(defaultValues);
    }

  }, [toastMsg]);

  const pagesWithFooter = ["", "shop", "about", "blog", "contact", "error"];
  return (
    <>
      <Header />
      <ToastContainer autoClose={2000} toastStyle={{ color: "#000", top: "5rem" }} />
      {children}
      {pagesWithFooter.includes(location.pathname.split("/").pop()) && (
        <Footer />
      )}
    </>
  );
}

export default MainLayout;
