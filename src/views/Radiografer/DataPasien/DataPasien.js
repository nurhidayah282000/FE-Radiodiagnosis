import axios from "axios";
import moment from "moment/moment";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import { baseURL } from "../../../routes/Config";
import WithAuthorization from "../../../utils/auth";
import Paginations from "../../../component/Pagination/Paginations";

const DataPasien = () => {
  const auth = WithAuthorization(["radiographer"]);

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${baseURL}/patients/all?page=${currentPage}`, {
        headers: {
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
        console.log(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if(auth) {
    return (
      <div>
        <body className="g-sidenav-show bg-gray-100">
          <div className="min-height-300 bg-primary position-absolute w-100"></div>
          <aside
            className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
            id="sidenav-main"
          >
            <SidebarRadiografer />
          </aside>
          <main className="main-content position-relative border-radius-lg">
            <HeaderUser />
            <div className="container-fluid py-2">
              <div className="row p-0">
                <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-header pb-2 p-4">
                      <div className="row">
                        <div className="col-6 d-flex align-items-center">
                          <h6 className="mb-0 font-weight-bolder">Data Pasien</h6>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn bg-gradient-primary btn-sm mb-0"
                            href="/radiografer-add-data-pasien"
                          >
                            <i className="fas fa-plus"></i>&nbsp;&nbsp;Tambah Data
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-0 pt-0 pb-2">
                      <div className="table-responsive p-0">
                        <table className="table align-items-center mb-0">
                          <thead>
                            <tr>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0 text-center">
                                Kode RM
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Nama Pasien
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Radiografer
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0">
                                Tanggal Periksa
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Status
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 pe-0 text-center">
                                Aksi
                              </th>
                              {/* <!-- <th className="text-secondary opacity-7"></th> --> */}
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item) => (
                              <tr key={item.id}>
                                <td className="ps-0">
                                  <p className="text-xs text-secondary mb-0 text-center">
                                    {item.medic_number}
                                  </p>
                                </td>
                                <td className="align-middle text-start text-sm ps-2">
                                  <p className="text-xs text-secondary mb-0">
                                    {item.fullname}
                                  </p>
                                </td>
                                <td className="align-middle text-start text-sm ps-2">
                                  <p className="text-xs text-secondary mb-0">
                                    {item.radiographer}
                                  </p>
                                </td>
                                <td className="align-middle text-start ps-0">
                                  <span className="text-secondary text-xs font-weight-bold">
                                    {moment(
                                      item.updated_at ?? item.created_at
                                    ).format("D-MM-YYYY")}
                                  </span>
                                </td>
                                <td className="align-middle text-start text-sm">
                                  <span
                                    className={`badge border-radius-xl badge-sm bg-gradient-${
                                      item.status ? "warning" : "success"
                                    }`}
                                  >
                                    {item.status ? "Proses" : "Selesai"}
                                  </span>
                                </td>
                                <td className="align-middle text-start text-sm pe-0 text-center">
                                  <Link
                                    to={`/radiografer-view-data-pasien/${item.id}`}
                                  >
                                    <span className="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                      Lihat Detail
                                    </span>
                                  </Link>
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
  }
  else {
    return <div></div>
  }
};

export default DataPasien;
