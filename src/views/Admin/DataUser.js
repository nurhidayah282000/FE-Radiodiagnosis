import axios from "axios";
import { React, useState, useEffect } from "react";
import HeaderAdmin from "../../component/Header/HeaderAdmin";
import DeleteModal from "../../component/Modal/DeleteModal";
import SidebarAdmin from "../../component/Sidebar/SidebarAdmin";
import { baseURL } from "../../routes/Config";
import { Link } from "react-router-dom";
import WithAuthorization from "../../utils/auth";
import Paginations from "../../component/Pagination/Paginations";

const DataUser = () => {
  const auth = WithAuthorization(["admin"]);

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  
  let startIndex = (currentPage - 1) * 10;

  let doctor = 0;
  let radiographer = 0;
  const token = sessionStorage.getItem("token");
  // get data user use axios
  useEffect(() => {
    axios
      .get(`${baseURL}/users/all?page=${currentPage}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setData(response.data.data);
          setPagination(response.data.meta);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // COUNT DOCTOR AND RADIOGRAPHER
  console.log(startIndex)

  data.map((profession) => {
    if (profession.role === "doctor") {
      doctor += 1;
    } else if (profession.role === "radiographer") {
      radiographer += 1;
    }
  });

  // END COUNT

  const handleDelete = async (e, userId) => {
    e.preventDefault();
    await axios
      .delete(`${baseURL}/users/delete/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  if (auth) {
    return (
      <div>
        <body class="g-sidenav-show bg-gray-100">
          <div class="min-height-300 bg-primary position-absolute w-100"></div>
          <aside
            class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
            id="sidenav-main"
          >
            <SidebarAdmin />
          </aside>
          <main class="main-content position-relative border-radius-lg">
            <HeaderAdmin />
            <div class="container-fluid py-2">
              <div class="row">
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4 ">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row ">
                        <div class="col-8 ">
                          <div class="numbers ">
                            <p class="text-sm mb-0 text-uppercase font-weight-bold d-flex justify-content-left">
                              User
                            </p>
                            <h2 class="font-weight-bolder d-flex justify-content-left">
                              {doctor}
                            </h2>
                            <p class="text-sm mb-0  font-weight-bold d-flex justify-content-left">
                              Jumlah Dokter Gigi
                            </p>
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                            <i
                              class="ni ni-money-coins text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-8 ">
                          <div class="numbers ">
                            <p class="text-sm mb-0 text-uppercase font-weight-bold d-flex justify-content-left">
                              User
                            </p>
                            <h2 class="font-weight-bolder d-flex justify-content-left">
                              {radiographer}
                            </h2>
                            <p class="text-sm mb-0  font-weight-bold d-flex justify-content-left">
                              Jumlah Radiografer
                            </p>
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                            <i
                              class="ni ni-world text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <div class="card mb-4">
                    <div class="card-header pb-2 p-4">
                      <div class="row">
                        <div class="col-4 ">
                          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div class="input-group">
                              <span class="input-group-text text-body border-radius-xl">
                                <i class="fas fa-search" aria-hidden="true"></i>
                              </span>
                              <input
                                type="text"
                                class="form-control border-radius-xl"
                                size="50"
                                placeholder="Nama User, NIP"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-8 text-end">
                          <a
                            class="btn bg-gradient-primary btn-sm mb-0"
                            href="/add-data-user"
                          >
                            <i class="fas fa-plus"></i>&nbsp;&nbsp;Tambah Data
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body px-0 pt-0 pb-2">
                      <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0 ">
                          <thead class="table-light">
                            <tr>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 pe-0">
                                Kode User
                              </th>
                              <th class="text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-2 pe-0">
                                Nama Lengkap
                              </th>
                              <th class="text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-0">
                                NIP
                              </th>

                              <th class="text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-0 ">
                                Email
                              </th>
                              <th class="text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-0">
                                Profesi
                              </th>
                              <th class="text-uppercase text-secondary text-center text-xxs font-weight-bolder opacity-7 ps-2 ">
                                Aksi
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item, index) => (
                              <tr key={item.id}>
                                <td class="ps-0 align-middle text-center ">
                                  <span class="text-xs text-secondary mb-0">
                                    {startIndex + index + 1}
                                  </span>
                                </td>
                                <td class="align-middle text-start text-sm ps-2 pe-0">
                                  <span class="text-xs text-secondary mb-0 ">
                                    {item.fullname}
                                  </span>
                                </td>
                                <td class="align-middle text-start text-sm ps-0">
                                  <span class="text-xs text-secondary mb-0">
                                    {item.nip}
                                  </span>
                                </td>
                                <td class="align-middle text-start ps-0">
                                  <span class="text-secondary text-xs font-weight-bold">
                                    {item.email}
                                  </span>
                                </td>
                                <td class="align-middle text-start ps-0">
                                  <span class="text-secondary text-xs font-weight-bold">
                                    {item.role}
                                  </span>
                                </td>
                                <td class="align-middle text-center text-sm pe-0">
                                  <span class="text-xs text-secondary mb-0 ">
                                    <div>
                                      <Link
                                        class="btn btn-outline-primary btn-sm mb-0 me-2 pt-1 pb-1 ps-2 pe-2 text-primary"
                                        to={`/edit-data-user/${item.id}`}
                                      >
                                        <i class="fa fa-pencil text-primary"></i>
                                      </Link>
                                      <button
                                        type="button"
                                        class="btn btn-outline-danger btn-sm mb-0 me-2 pt-1 pb-1 ps-2 pe-2 text-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                      >
                                        <i class="fa fa-trash text-danger"></i>
                                      </button>
                                      <Link
                                        to={`/view-data-user/${item.id}`}
                                        class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-secondary"
                                      >
                                        <i class="fa fa-eye text-secondary"></i>
                                      </Link>
                                      <DeleteModal
                                        userId={item.id}
                                        handleDelete={handleDelete}
                                      />
                                    </div>
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Paginations
                currentPage={currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </main>
        </body>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DataUser;
