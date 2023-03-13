import axios from "axios";
import moment from "moment/moment";
import { React, useState, useEffect } from "react";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import { baseURL } from "../../../routes/Config";
import { Link } from "react-router-dom";

const CatatanPasien = () => {
  const [data, setData] = useState([]);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/radiographics/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                        <h6 className="mb-0 font-weight-bolder">
                          Catatan Pasien
                        </h6>
                      </div>
                      <div className="col-6 text-end">
                        <a
                          className="btn bg-gradient-primary btn-sm mb-0"
                          href="/dokter-add-catatan-pasien"
                        >
                          <i className="fas fa-plus"></i>&nbsp;&nbsp;Tambah
                          Catatan
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th className="w-4 col-1 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0">
                              Kode RM
                            </th>
                            <th className="col-3 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">
                              Nama Pasien
                            </th>
                            <th className="col-4 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Dokter Verfikator
                            </th>
                            <th className="col-2 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Tanggal Verifikasi
                            </th>

                            <th className="col-2 text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-2 pe-0">
                              Aksi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item) => (
                            <tr key={item.radiographics_id}>
                              <td className="ps-0">
                                <p className="text-xs text-secondary mb-0 text-center">
                                  {item.medic_number}
                                </p>
                              </td>
                              <td className="align-middle text-start text-sm ps-4">
                                <p className="text-xs text-secondary mb-0">
                                  {item.fullname}
                                </p>
                              </td>
                              <td className="align-middle text-start text-sm ps-2">
                                <p className="text-xs text-secondary mb-0">
                                  {item.doctor_name ?? "-"}
                                </p>
                              </td>
                              <td className="align-middle text-start text-sm ps-2">
                                <p className="text-xs text-secondary mb-0">
                                  {item.panoramik_check_date !== null
                                    ? moment(item.panoramik_check_date).format(
                                        "DD/MM/YYYY"
                                      )
                                    : "-"}
                                </p>
                              </td>

                              <td className="align-middle text-sm">
                                <Link
                                  to={`/dokter-detail-catatan-pasien/${item.radiographics_id}`}
                                >
                                  <span className="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
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
          </div>
        </main>
      </body>
    </div>
  );
};

export default CatatanPasien;
