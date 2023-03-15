import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import InterpretasiManual from "../../../component/Modal/InterpretasiManual";
import VerifiedNo from "../../../component/Modal/VerifiedNo";
import VerifiedYes from "../../../component/Modal/VerifiedYes";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import { baseURL } from "../../../routes/Config";

const ViewGambarPanoramikDokter = () => {
  const [data, setData] = useState({});
  const [doctors, setDoctors] = useState([]);

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
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${baseURL}/doctors/users/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDoctors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e, doctorId) => {
    e.preventDefault();
    axios
      .put(
        `${baseURL}/radiographics/edit/${id}/doctor`,
        { doctorId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        window.location.reload();
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
          <SidebarDokter />
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
                          href="/dokter-radiografi-panoramik"
                        >
                          <i
                            className="fa fa-arrow-left"
                            aria-hidden="true"
                          ></i>
                          &nbsp;&nbsp;Kembali
                        </a>
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
                                Status
                              </p>
                              {data.panoramik_check_date === null ? (
                                <p className="text-xs font-weight-bolder mb-0 text-warning">
                                  Belum Diverifikasi oleh Dokter
                                </p>
                              ) : (
                                <p className="text-xs font-weight-bolder mb-0 text-success">
                                  Diverifikasi oleh {data.doctor_name}
                                </p>
                              )}
                            </div>
                            <div className="col-3">
                              <p className="text-xs text-secondary mb-1">
                                Dokter Verifikator
                              </p>

                              <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                                style={{ width: "70%" }}
                                name="doctor_id"
                                value={data.doctor_id}
                                onChange={(e) =>
                                  handleSubmit(e, e.target.value)
                                }
                                required
                              >
                                <option value="">Pilih Dokter</option>
                                {doctors.map((doctor) => (
                                  <option key={doctor.id} value={doctor.id}>
                                    {doctor.fullname}
                                  </option>
                                ))}
                              </select>
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
                                      src="../assets/img/App/panoramik.jpg"
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
                                              htmlFor="btncheck1"
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
                                              htmlFor="btncheck2"
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
                                              htmlFor="btncheck3"
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
                                              htmlFor="btncheck4"
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
                                              htmlFor="btncheck5"
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
                                              htmlFor="btncheck6"
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
                                              htmlFor="btncheck7"
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
                                              htmlFor="btncheck8"
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
                                              htmlFor="btncheck9"
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
                                              htmlFor="btncheck10"
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
                                              htmlFor="btncheck11"
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
                                              htmlFor="btncheck12"
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
                                              htmlFor="btncheck13"
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
                                              htmlFor="btncheck14"
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
                                              htmlFor="btncheck15"
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
                                              htmlFor="btncheck16"
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
                                              htmlFor="btncheck17"
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
                                              htmlFor="btncheck18"
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
                                              htmlFor="btncheck19"
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
                                              htmlFor="btncheck20"
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
                                              htmlFor="btncheck21"
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
                                              htmlFor="btncheck22"
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
                                              htmlFor="btncheck23"
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
                                              htmlFor="btncheck24"
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
                                              htmlFor="btncheck25"
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
                                              htmlFor="btncheck26"
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
                                              htmlFor="btncheck27"
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
                                              htmlFor="btncheck28"
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
                                              htmlFor="btncheck29"
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
                                              htmlFor="btncheck30"
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
                                              htmlFor="btncheck31"
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
                                              htmlFor="btncheck32"
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
                                              htmlFor="btncheck33"
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
                                              htmlFor="btncheck34"
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
                                              htmlFor="btncheck35"
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
                                              htmlFor="btncheck36"
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
                                              htmlFor="btncheck37"
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
                                              htmlFor="btncheck38"
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
                                              htmlFor="btncheck39"
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
                                              htmlFor="btncheck40"
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
                                              htmlFor="btncheck41"
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
                                              htmlFor="btncheck42"
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
                                              htmlFor="btncheck43"
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
                                              htmlFor="btncheck44"
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
                                              htmlFor="btncheck45"
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
                                              htmlFor="btncheck46"
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
                                              htmlFor="btncheck47"
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
                                              htmlFor="btncheck48"
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
                                              htmlFor="btncheck49"
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
                                              htmlFor="btncheck50"
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
                                              htmlFor="btncheck51"
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
                                              htmlFor="btncheck52"
                                            >
                                              75
                                            </label>
                                          </div>
                                          <div className="d-flex justify-content-center img-fluid mt-2 mb-4">
                                            <img src="../assets/img/App/line.png" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card shadow-none mt-4 me-2 ms-2 border-0">
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

                                          <div className="col-6 ps-0">
                                            <a
                                              className="btn btn-link btn-sm text-xs text-primary pt-0 pe-0 mb-0 font-weight-bold d-flex justify-content-end"
                                              data-bs-toggle="modal"
                                              data-bs-target="#exampleModal"
                                            >
                                              Verifikasi Diagnosa
                                            </a>
                                          </div>
                                          <VerifiedNo />
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
                                          <div className="col-6 ps-0">
                                            <a
                                              className="btn btn-link btn-sm text-xs text-primary pt-0 pe-0 mb-0 font-weight-bold d-flex justify-content-end"
                                              data-bs-toggle="modal"
                                              data-bs-target="#exampleModal"
                                            >
                                              Verifikasi Diagnosa
                                            </a>
                                            <VerifiedYes />
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
                                          <div className="col-6 ps-0">
                                            <a
                                              className="btn btn-link btn-sm text-xs text-primary pt-0 pe-0 mb-0 font-weight-bold d-flex justify-content-end"
                                              data-bs-toggle="modal"
                                              data-bs-target="#exampleModal"
                                            >
                                              Verifikasi Diagnosa
                                            </a>
                                            <VerifiedYes />
                                          </div>
                                        </div>
                                        <div className="d-grid">
                                          <button
                                            className="btn btn-sm btn-primary mt-2 mb-2"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal3"
                                          >
                                            Interpretasi Manual
                                          </button>
                                          <InterpretasiManual radiographicId={id}/>
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

export default ViewGambarPanoramikDokter;
