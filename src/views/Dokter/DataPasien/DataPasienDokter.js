import axios from "axios";
import moment from "moment/moment";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import { baseURL } from "../../../routes/Config";
import WithAuthorization from "../../../utils/auth";

const DataPasienDokter = () => {
  const auth = WithAuthorization(["doctor"]);

  const [data, setData] = useState([]);

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${baseURL}/patients/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(auth) {
    return (
      <div>
        <body className="g-sidenav-show bg-gray-100">
          <div className="min-height-300 bg-primary position-absolute w-100"></div>
          <aside
            className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
            id="sidenav-main"
          >
            <SidebarDokter />
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
                                Tgl Upload Gambar
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Status
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 pe-0 text-center">
                                Aksi
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item) => {
                              return (
                                <tr>
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
                                      ).format("DD-MM-YYYY")}
                                    </span>
                                  </td>
                                  <td className="align-middle text-start text-sm">
                                    <span
                                      class={`badge border-radius-xl badge-sm bg-gradient-${
                                        item.status ? "success" : "warning"
                                      }`}
                                    >
                                      {item.status ? "Selesai" : "Proses"}
                                    </span>
                                  </td>
                                  <td className="align-middle text-start text-sm pe-0 text-center">
                                    <Link
                                      to={`/dokter-view-data-pasien/${item.id}`}
                                    >
                                      <span className="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                        Lihat Detail
                                      </span>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  } else {
    return <div></div>
  }
};

export default DataPasienDokter;
