import axios from "axios";
import moment from "moment";
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import DeleteModal from "../../../component/Modal/DeleteModal";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import { baseURL } from "../../../routes/Config";

const ViewGambarPanoramik = () => {
  const [data, setData] = useState({});

  const { id } = useParams();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/radiographics/detail/${id}`, {
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
  }, [id]);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${baseURL}/radiographics/delete/${data.radiographics_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        window.location.href = "/radiografer-radiografi-panoramik";
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <HeaderDataUser />
          <div className="container-fluid py-2">
            <div className="row p-0">
              <div className="col-12">
                <div className="card mb-4">
                  <div className="card-header pb-2 p-4">
                    <div className="row">
                      <div className="col-8 d-flex align-items-center">
                        <a
                          className="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2"
                          href="/radiografer-radiografi-panoramik"
                        >
                          <i
                            className="fa fa-arrow-left"
                            aria-hidden="true"
                          ></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>

                      <div className="col">
                        <div className="row">
                          <div className="col-7 d-flex justify-content-end">
                            <Link
                              to={`/radiografer-upload-ulang-gambar-panoramik/${id}`}
                            >
                              <i className="fa fa-cloud-upload"></i>&nbsp;&nbsp;
                              Unggah Ulang Gambar
                            </Link>
                          </div>
                          <div className="col-5">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa fa-trash text-danger"></i>
                              &nbsp;&nbsp; Hapus Gambar
                            </button>
                          </div>
                          <DeleteModal
                            userId={data.radiographics_id}
                            handleDelete={handleDelete}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body px-0 pb-2 pt-0 pe-3">
                    <div className="row">
                      <div className="col pe-0">
                        <div className="card-header pb-0 ps-0">
                          <div className="d-flex align-items-center">
                            <h6 className="mb-0 font-weight-bolder">
                              Verifikasi Gambar Radiografi Panoramik
                            </h6>
                          </div>
                          <div className="row mt-3">
                            <div className="col-3">
                              <p className="text-xs text-secondary mb-1">
                                Kode Pasien
                              </p>
                              <p className="text-xs font-weight-bolder mb-0">
                                {data.medic_number}
                              </p>
                            </div>
                            <div className="col-3">
                              <p className="text-xs text-secondary mb-1">
                                Nama Pasien
                              </p>
                              <p className="text-xs font-weight-bolder mb-0">
                                {data.fullname}
                              </p>
                            </div>
                            <div className="col-3">
                              <p className="text-xs text-secondary mb-1">
                                Tanggal Periksa
                              </p>
                              <p className="text-xs font-weight-bolder mb-0">
                                {moment(data.panoramik_upload_date).format(
                                  "DD/MM/YYY"
                                )}
                              </p>
                            </div>
                            <div className="col-3">
                              <p className="text-xs text-secondary mb-1">
                                Status
                              </p>
                              <p className="text-xs font-weight-bolder mb-0 text-warning">
                                {data.panoramik_check_date === null ? (
                                  <p className="text-xs font-weight-bolder mb-0 text-warning">
                                    Belum Diverifikasi oleh Dokter
                                  </p>
                                ) : (
                                  <p className="text-xs font-weight-bolder mb-0 text-success">
                                    Diverifikasi oleh {data.doctor_name}
                                  </p>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr
                          style={{
                            height: "1px",
                            borderWidth: "0 px",
                            color: "gray",
                            backgroundColor: "gray",
                            marginBottom: "0 px",
                          }}
                        />

                        <div className="card-body pb-2 pt-0">
                          <div className="row justify-content-center">
                            <div className="col-md-12">
                              <div
                                className="card shadow-none mt-2"
                                style={{ backgroundColor: "ghostwhite" }}
                              >
                                <div className="row d-flex justify-content-center mt-4">
                                  <div className="col-8">
                                    <p className="text-xs p-2 mb-0">
                                      Gambar Radiografi
                                    </p>

                                    <img
                                      className="img-fluid border-radius-xl p-2"
                                      src={`${
                                        baseURL + data.panoramik_picture
                                      }`}
                                    />

                                    <p className="text-xs p-2 mb-0 mt-4">
                                      Diagram Gigi
                                    </p>

                                    <div className="card shadow-none mt-2 me-2 ms-2 mb-4">
                                      <div className="card-body">
                                        <div className="row">
                                          <div className="d-flex justify-content-center img-fluid mb-2">
                                            <img src="../assets/img/App/line.png" />
                                          </div>
                                          <div className="col d-flex justify-content-center">
                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck1"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck1"
                                            >
                                              55
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck2"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck2"
                                            >
                                              54
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck3"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck3"
                                            >
                                              53
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck4"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck4"
                                            >
                                              52
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck5"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck5"
                                            >
                                              51
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck6"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck6"
                                            >
                                              61
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck7"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck7"
                                            >
                                              62
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck8"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck8"
                                            >
                                              63
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck9"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck9"
                                            >
                                              64
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck10"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck10"
                                            >
                                              65
                                            </label>
                                          </div>
                                          <div className="col d-flex justify-content-center">
                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck11"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck11"
                                            >
                                              18
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck12"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck12"
                                            >
                                              17
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck13"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck13"
                                            >
                                              16
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck14"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck14"
                                            >
                                              15
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck15"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck15"
                                            >
                                              14
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck16"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck16"
                                            >
                                              13
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck17"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck17"
                                            >
                                              12
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck18"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck18"
                                            >
                                              11
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck19"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck19"
                                            >
                                              21
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck20"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck20"
                                            >
                                              22
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck21"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck21"
                                            >
                                              23
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck22"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck22"
                                            >
                                              24
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck23"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck23"
                                            >
                                              25
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck24"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck24"
                                            >
                                              26
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck25"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck25"
                                            >
                                              27
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck26"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck26"
                                            >
                                              28
                                            </label>
                                          </div>
                                          <div className="d-flex justify-content-center img-fluid mt-2">
                                            <img src="../assets/img/App/line2.png" />
                                          </div>
                                          <div className="d-flex justify-content-center img-fluid mt-5">
                                            <img src="../assets/img/App/line2.png" />
                                          </div>

                                          <div className="col d-flex justify-content-center mt-1">
                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck27"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck27"
                                            >
                                              48
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck28"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck28"
                                            >
                                              47
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck29"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck29"
                                            >
                                              46
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck30"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck30"
                                            >
                                              45
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck31"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck31"
                                            >
                                              44
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck32"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck32"
                                            >
                                              43
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck33"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck33"
                                            >
                                              42
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck34"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck34"
                                            >
                                              41
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck35"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck35"
                                            >
                                              31
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck36"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck36"
                                            >
                                              32
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck37"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck37"
                                            >
                                              33
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck38"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck38"
                                            >
                                              34
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck39"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck39"
                                            >
                                              35
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck40"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck40"
                                            >
                                              36
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck41"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck41"
                                            >
                                              37
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck42"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck42"
                                            >
                                              38
                                            </label>
                                          </div>

                                          <div className="col d-flex justify-content-center">
                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck43"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck43"
                                            >
                                              85
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck44"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck44"
                                            >
                                              84
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck45"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck45"
                                            >
                                              83
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck46"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck46"
                                            >
                                              82
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck47"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck47"
                                            >
                                              81
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck48"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck48"
                                            >
                                              71
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck49"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck49"
                                            >
                                              72
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck50"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck50"
                                            >
                                              73
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck51"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck51"
                                            >
                                              74
                                            </label>

                                            <input
                                              type="checkbox"
                                              className="btn-check"
                                              id="btncheck52"
                                              autoComplete="off"
                                            />
                                            <label
                                              className="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck52"
                                            >
                                              75
                                            </label>
                                          </div>
                                          <div className="d-flex justify-content-center img-fluid mt-2 mb-4">
                                            <img src="../assets/img/App/line.png" />
                                          </div>
                                          <div className="d-grid">
                                            <button
                                              className="btn btn-sm btn-primary mt-2 mb-2"
                                              type="button"
                                            >
                                              Deteksi Sistem
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card shadow-none mt-4 me-2 ms-2">
                                      <div className="card-body">
                                        <p className="text-xs">
                                          Radiodiagnosis Sistem
                                        </p>
                                        <div className="row">
                                          <div className="col-2">
                                            <ul className="ps-3">
                                              <li className="text-xs">
                                                Gigi #11
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-4 ps-0">
                                            <p className="text-xs text-dark font-weight-bold">
                                              Karies Gigi
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-2">
                                            <ul className="ps-3">
                                              <li className="text-xs">
                                                Gigi #22
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-4 ps-0">
                                            <p className="text-xs text-dark font-weight-bold">
                                              Lesi Periapikal
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-2">
                                            <ul className="ps-3">
                                              <li className="text-xs">
                                                Gigi #48
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="col-4 ps-0">
                                            <p className="text-xs text-dark font-weight-bold">
                                              Impaksi
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ViewGambarPanoramik;
