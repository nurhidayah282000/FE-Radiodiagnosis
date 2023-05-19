import axios from "axios";
import moment from "moment";
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import { baseURL } from "../../../routes/Config";
import WithAuthorization from "../../../utils/auth";
import PaginationsHistory from "../../../component/Pagination/PaginationsHistory";

const DetailCatatanPasien = () => {
  const auth = WithAuthorization(["doctor"]);

  const [data, setData] = useState({});
  const [system, setSystem] = useState([]);
  const [manual, setManual] = useState([]);
  const [verificator, setVerificator] = useState([]);

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
          mappingDiagnoses(response.data.data.diagnoses);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const mappingDiagnoses = (diagnoses) => {
    let systemDiagnosis = [];
    let manualDiagnosis = [];
    let verificatorDiagnosis = [];

    diagnoses.map((diagnosis) => {
      systemDiagnosis.push({
        tooth: diagnosis.tooth_number,
        diagnosis: diagnosis.system_diagnosis,
      });

      manualDiagnosis.push({
        tooth: diagnosis.tooth_number,
        diagnosis: diagnosis.manual_diagnosis,
      });

      verificatorDiagnosis.push({
        tooth: diagnosis.tooth_number,
        diagnosis: diagnosis.verificator_diagnosis,
      });
    });

    setSystem(systemDiagnosis);
    setManual(manualDiagnosis);
    setVerificator(verificatorDiagnosis);
  };

  if (auth) {
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
                            href="/dokter-catatan-pasien"
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

                    <div className="card-body ps-0 pb-2 pt-0 pe-3">
                      <div className="row">
                        <div className="col pe-0">
                          <div className="card-header pb-0">
                            <div className="d-flex align-items-center">
                              <h6 className="mb-0 font-weight-bolder">
                                Detail Catatan Pasien
                              </h6>
                            </div>
                            <div className="row mt-3">
                              <div className="col-2">
                                <p className="text-xs text-secondary mb-1">
                                  Kode Pasien
                                </p>
                                <p className="text-xs font-weight-bolder mb-0">
                                  {data.medic_number}
                                </p>
                              </div>
                              <div className="col-2">
                                <p className="text-xs text-secondary mb-1">
                                  Nama Pasien
                                </p>
                                <p className="text-xs font-weight-bolder mb-0">
                                  {data.fullname}
                                </p>
                              </div>
                              <div className="col-4">
                                <p className="text-xs text-secondary mb-1">
                                  Tanggal Verifikasi
                                </p>
                                <p className="text-xs font-weight-bolder mb-0">
                                  {data.panoramik_check_date !== null
                                    ? moment(data.panoramik_check_date).format(
                                        "DD/MM/YYYY"
                                      )
                                    : "-"}
                                </p>
                              </div>
                              <div className="col-2 text-end pe-0">
                                <div className="d-flex justify-content-end mb-0">
                                  <Link
                                  // to={``}
                                  >
                                    <button className="btn text-white btn-sm mb-0" style={{backgroundColor:"#FF5347"}}>
                                      <i
                                        className="fa fa-print"
                                        aria-hidden="true"
                                      ></i>
                                      &nbsp;&nbsp; Cetak Catatan
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-2 ps-3">
                                <div className="d-flex justify-content-start mb-0">
                                  <Link
                                    to={`/dokter-view-catatan-pasien/${id}`}
                                  >
                                    <button className="btn btn-primary btn-sm mb-0">
                                      Lihat Catatan
                                    </button>
                                  </Link>
                                </div>
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
                                  <div className="row d-flex justify-content-center mt-4 mb-4">
                                    <div className="col-8">
                                      <div className="card shadow-none mt-4 me-2 ms-2">
                                        <div className="card-body">
                                          <p className="text-sm font-weight-bolder text-dark">
                                            Rekam Medik#1
                                          </p>
                                          <p class="text-xs text-secondary font-weight-bold">
                                            Gambar Panoramik Gigi
                                          </p>
                                          <img
                                            className=" img-fluid ps-0 pb-4 border-radius-xl"
                                            // style={{borderBottomLeftRadius:"1rem" }}
                                            src={`${
                                              baseURL + data.panoramik_picture
                                            }`}
                                          />
                                          <div className="row">
                                            <div className="col-3">
                                              <p className="text-xs text-secondary font-weight-bold">
                                                Tanggal Verifikasi
                                              </p>
                                            </div>
                                            <div className="col-4">
                                              <p className="text-xs text-primary font-weight-bold">
                                                {data.panoramik_check_date !==
                                                null
                                                  ? moment(
                                                      data.panoramik_check_date
                                                    ).format("DD/MM/YYYY")
                                                  : "-"}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-3">
                                              <p className="text-xs text-secondary font-weight-bold">
                                                Dokter Verifikator
                                              </p>
                                            </div>
                                            <div className="col-4">
                                              <p className="text-xs text-primary font-weight-bold">
                                                {data.doctor_name ?? "-"}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="row mt-4">
                                            <div className="col-12">
                                              <p className="text-xxs text-secondary font-weight-bold">
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
                                                <div className="col-10 ps-0">
                                                  <p className="text-xs text-dark font-weight-bold mb-0 pb-2">
                                                    Karies Gigi
                                                  </p>
                                                  <hr
                                                    style={{
                                                      height: "1px",
                                                      borderWidth: "0 px",
                                                      color: "gray",
                                                      backgroundColor: "gray",
                                                      marginBottom: "0 px",
                                                      marginTop: "0 px",
                                                    }}
                                                  />
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
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-12">
                                              <p className="text-xxs text-secondary font-weight-bold">
                                                Radiodiagnosis Verifikator
                                              </p>
                                              <div className="row">
                                                <div className="col-2">
                                                  <ul className="ps-3">
                                                    <li className="text-xs">
                                                      Gigi #11
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="col-10 ps-0">
                                                  <p className="text-xs text-dark font-weight-bold mb-0 pb-2">
                                                    Resorbsi
                                                  </p>
                                                  <hr
                                                    style={{
                                                      height: "1px",
                                                      borderWidth: "0 px",
                                                      color: "gray",
                                                      backgroundColor: "gray",
                                                      marginBottom: "0 px",
                                                      marginTop: "0 px",
                                                    }}
                                                  />
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
                                                    Karies Gigi
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="row">
                                            <div className="col-12">
                                              <p className="text-xxs text-secondary font-weight-bold">
                                                Interpretasi Manual
                                              </p>
                                              {manual.map((item, index) => (
                                                <div
                                                  key={index}
                                                  className="row"
                                                >
                                                  <div className="col-2">
                                                    <ul className="ps-3">
                                                      <li className="text-xs">
                                                        Gigi #{item.tooth}
                                                      </li>
                                                    </ul>
                                                  </div>
                                                  <div className="col-10 ps-0">
                                                    <p className="text-xs text-dark font-weight-bold mb-0 pb-2">
                                                      {item.diagnosis}
                                                    </p>
                                                    <hr
                                                      style={{
                                                        height: "1px",
                                                        borderWidth: "0 px",
                                                        color: "gray",
                                                        backgroundColor: "gray",
                                                        marginBottom: "0 px",
                                                        marginTop: "0 px",
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              ))}
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
                  <PaginationsHistory/>
                </div>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DetailCatatanPasien;
