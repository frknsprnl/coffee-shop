import { useState, useEffect } from "react";
import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useTable } from "react-table";
import axios from "axios";
import { useLoginState } from "../../../Recoil/User/useLoginState";
import { useNavigate } from "react-router-dom";
import { useToastState } from "../../../Recoil/Error/useToastState";
import { useLoadingState } from "../../../Recoil/Loading/useLoadingState";
import { useUserState } from "../../../Recoil/User/userState";
import InputField from "../../../components/InputField";
import TextAreaField from "../../../components/TextAreaField";
import Button from "../../../components/Button";

function AdminBlog() {
  const [data, setData] = useState([]);
  const defaultValues = { author: "admin" };
  const [formData, setFormData] = useState(defaultValues);
  const { isLoggedIn, setIsLoggedIn } = useLoginState();
  const navigate = useNavigate();
  const { toastMsg, setToastMsg } = useToastState();
  const { isLoading, setIsLoading } = useLoadingState();
  const { user, setUser } = useUserState();

  const Logout = () => {
    if (isLoggedIn === true) {
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/");
      setToastMsg({ isError: false, message: "Başarıyla çıkış yaptınız." });
    }
  };

  const addBlog = async (formData) => {
    setIsLoading(true);
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/blog/createarticle`, formData, {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((resp) => {
        setToastMsg({ isError: false, message: resp.data.message });
        setFormData(defaultValues);
      })
      .catch((err) => {
        setToastMsg({ isError: true, message: err.response.data.message });
      })
      .finally(() => setIsLoading(false));
  };

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addBlog(formData);
    await getBlogs();
  };

  const getBlogs = async () => {
    setIsLoading(true);
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/blog/blogs`, {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
        },
      })
      .then((resp) => {
        setData(resp.data.articles);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Logout();
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const deleteArticle = async (article_id) => {
    setIsLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/blog/deletearticle`,
        { article_id },
        {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((resp) => {
        setToastMsg({ isError: false, message: resp.data.message });
        getBlogs();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Başlık",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Tarih",
        accessor: (row) =>
          new Date(Date.parse(row.date)).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }),
      },
      {
        Header: "Sil",
        Cell: ({ row }) => (
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded-lg font-semibold"
            onClick={() => deleteArticle(row.original._id)}
          >
            Sil
          </button>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <MainLayout>
      <Link
        to="/admin"
        className="fixed top-28 left-12 lg:left-28 hidden md:flex"
      >
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-4xl text-white hover:text-[#cda154]"
        />
      </Link>
      <div className="py-4 md:py-8 flex flex-col md:flex-row gap-8 justify-center items-center">
        <table
          {...getTableProps()}
          className="border-[1.6px] border-white text-center"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="bg-black py-2 text-white font-bold"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="p-3 border-[1.6px] text-white"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="w-80 border-[1.6px] py-4 px-8 rounded-xl">
          <h1 className="text-white text-lg text-center">Blog Ekle</h1>
          <form
            className="py-4 flex flex-col gap-3"
            autoComplete="off"
            noValidate
          >
            <InputField
              name="title"
              label="Başlık"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextAreaField
              name="body"
              className="resize-none"
              label="İçerik"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <input
              type="file"
              name="image"
              className="text-white text-sm"
              onChange={(e) => handleChange(e.target.name, e.target.files[0])}
            />
            <Button name="Ekle" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdminBlog;
