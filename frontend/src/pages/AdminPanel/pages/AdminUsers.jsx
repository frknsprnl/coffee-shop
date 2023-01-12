import { useState, useEffect } from "react";
import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useTable } from "react-table";
import { useLoadingState } from "../../../Recoil/Loading/useLoadingState";
import { useToastState } from "../../../Recoil/Error/useToastState";
import { useLoginState } from "../../../Recoil/User/useLoginState";
import { useNavigate } from "react-router-dom";

function AdminUsers() {
  const [data, setData] = useState([]);
  const { isLoading, setIsLoading } = useLoadingState();
  const { toastMsg, setToastMsg } = useToastState();
  const {isLoggedIn, setIsLoggedIn} = useLoginState();
  const navigate = useNavigate();

  const Logout = () => {
    if (isLoggedIn === true) {
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/");
      setToastMsg({ isError: false, message: "Başarıyla çıkış yaptınız." });
    }
  };

  const getUsers = async (req, res) => {
    setIsLoading(true);
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/getusers`, {
        headers: {
          "x-access-token": `${localStorage.getItem("access-token")}`,
        },
      })
      .then((resp) => {
        setData(resp.data.users);
        // console.log(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Logout();
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (user_id) => {
    setIsLoading(true);
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/user/deleteuser`,
        { _id: user_id },
        {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        }
      )
      .then((resp) => {
        setToastMsg({ isError: false, message: resp.data.message });
        getUsers();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Ad",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Soyad",
        accessor: "surname",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Rol",
        accessor: "role",
      },
      {
        Header: "Sil",
        Cell: ({ row }) => (
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-1 rounded-lg font-semibold"
            onClick={() => deleteUser(row.original._id)}
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
      <div className="py-4 md:py-8 flex justify-center items-center">
        <table
          {...getTableProps()}
          className="border-[1.6px] border-white text-center"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} >
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
      </div>
    </MainLayout>
  );
}

export default AdminUsers;
