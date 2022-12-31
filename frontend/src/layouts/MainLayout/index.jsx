import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToastState } from "../../Recoil/Error/useToastState";
import { useLoadingState } from "../../Recoil/Loading/useLoadingState";
import LoadingModal from "../../components/LoadingModal";

function MainLayout({ children }) {
  const location = useLocation();
  const { toastMsg, setToastMsg } = useToastState();
  const { isLoading } = useLoadingState();
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const notifyError = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);

    const defaultValues = { isError: false, message: "" };

    toast.clearWaitingQueue();

    if (toastMsg.isError === true) {
      notifyError(toastMsg.message);
      setToastMsg(defaultValues);
    } else if (toastMsg.isError === false && toastMsg.message) {
      notifySuccess(toastMsg.message);
      setToastMsg(defaultValues);
    }
  }, [toastMsg]);

  useEffect(() => {
    const pagesWithoutFooter = ["user", "basket", "login", "register"];

    if (
      location.pathname.split("/").some((p) => pagesWithoutFooter.includes(p))
    ) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <>
      <Header />
      <ToastContainer
        autoClose={2500}
        toastStyle={{
          color: "#fff",
          backgroundColor: "#000",
          border: "1.6px solid",
          borderRadius: ".75rem",
          top: "5rem",
        }}
        limit={2}
        hideProgressBar={true}
      />
      {isLoading && <LoadingModal />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}

export default MainLayout;
