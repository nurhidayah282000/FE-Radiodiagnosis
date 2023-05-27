import axios from "axios";
import { React, useState, useEffect } from "react";
import UploadGambarError from "../../../component/Alerts/UploadGambarError";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import { baseURL } from "../../../routes/Config";
import WithAuthorization from "../../../utils/auth";

const UploadGambarPanoramik = () => {
  const auth = WithAuthorization(["radiographer"]);
  const [radiographics, setRadiographics] = useState([]);

  const [data, setData] = useState({});
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("patient-");
  const [patient, setPatient] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/patient/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setPatients(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${baseURL}/radiographics/users/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data) {
          setRadiographics(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/patients/detail/${patientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPatient(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [patientId]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("panoramikPicture", selectedFile);
    formData.append("radiographerId", data.radiographic_id);

    axios
      .post(`${baseURL}/radiographics/patients/${patientId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSelectedFile(null);
        window.location.href = "/radiografer-radiografi-panoramik";
      })
      .catch((error) => {
        console.log(error);
      });
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
            <SidebarRadiografer />
          </aside>
          <main className="main-content position-relative border-radius-lg">
            <HeaderDataUser />
            <div className="container-fluid py-2">
              <div className="row mb-4 h-100">
                <div className="col-12">
                  <div className="card mb-4 h-100">
                    <form onSubmit={handleUploadImage}>
                      <div className="card-header pb-2 p-4">
                        <div className="row">
                          <div className="col-6 d-flex align-items-center">
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
                        </div>
                        <div className="row mt-3">
                          <div className="col-2">
                            <p class="text-xs text-secondary mb-2">Kode RM</p>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              style={{ width: "70%", height: "50%" }}
                              name="patientId"
                              onChange={(e) => setPatientId(e.target.value)}
                              required
                            >
                              <option selected disabled value="">
                                Koed RM
                              </option>
                              {patients.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.medic_number}
                                </option>
                              ))}
                            </select>
                            {/* UI YANG BENAR */}
                            {/* <p className="text-xs text-secondary mb-2">
                              Kode RM
                            </p>
                            <form class="d-flex">
                              <input
                                style={{ height: "0%", width: "100%" }}
                                class="form-control me-2 text-sm"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />
                              <button
                                class="btn btn-outline-secondary btn-sm pe-3 ps-3"
                                type="submit"
                              >
                                <i class="fas fa-search" aria-hidden="true"></i>
                              </button>
                            </form> */}
                          </div>
                          <div class="col-3">
                            <p class="text-xs text-secondary mb-2">
                              Nama Pasien
                            </p>

                            <p
                              style={{ width: "100%", height: "50%" }}
                              class="form-control me-2 text-sm"
                            >
                              {patient?.fullname}
                            </p>
                          </div>
                          <div className="col-3">
                            <p className="text-xs text-secondary mb-1">
                              Radiografer
                            </p>

                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              style={{ width: "70%" }}
                              id="radiographic_id"
                              name="radiographic_id"
                              defaultValue={data.radiographic_id}
                              onChange={handleChange}
                              // onChange={(e) =>
                              //   handleSubmit(e, e.target.value)
                              // }
                              // required
                              // value={data.doctor_id}
                              // onChange={(e) =>
                              //   handleSubmit(e, e.target.value)
                              // }
                              // required
                            >
                              <option>Pilih Radiografer</option>
                              {radiographics.map((radiographic) => {
                                return (
                                  <option
                                    key={radiographic.id}
                                    value={radiographic.id}
                                  >
                                    {radiographic.fullname}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          {/* <div class="col-3 me-0">
                            <p class="text-xs text-secondary mb-2">
                              Radiografer
                            </p>
                            <select
                              className="form-select form-select-sm"
                              aria-label=".form-select-sm example"
                              style={{ width: "70%", height: "50%" }}
                              name="patientId"
                              onChange={(e) => setPatientId(e.target.value)}
                              required
                            >
                              <option selected disabled value="">
                                Kode RM
                              </option>
                              {patients.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.medic_number}
                                </option>
                              ))}
                            </select>
                          </div> */}
                          {/* <div className="col-3">
                            <p className="text-xs text-secondary mb-2">
                              Nama Pasien
                            </p>
                            <p className="text-xs font-weight-bolder mb-0">
                              {patient?.fullname}
                            </p>
                          </div> */}
                        </div>
                      </div>
                      <hr
                        style={{
                          height: "1px",
                          borderWidth: "0px",
                          color: "gray",
                          backgroundColor: "gray",
                          marginBottom: "0px",
                          marginTop: "0px",
                        }}
                      />

                      <div className="card-body px-0 pb-2 pt-0">
                        <div className="row justify-content-center">
                          <div className="col-md-6">
                            <div className="card-header pb-0">
                              <div className="d-flex align-items-center">
                                <h6 className="mb-3 font-weight-bolder">
                                  Tambah Gambar Radiografi <br />
                                  Panoramik.
                                </h6>
                              </div>
                              <div
                                className="d-flex justify-content-center"
                                style={{
                                  height: "15rem",
                                }}
                              >
                                <div
                                  className="card shadow-none"
                                  style={{
                                    width: "35rem",
                                    height: "12rem",
                                    border: "2px dashed gainsboro",
                                    backgroundColor: "ghostwhite",
                                  }}
                                >
                                  <div className="d-flex justify-content-center mt-6 pt-2">
                                    <div>
                                      <img src="../assets/img/App/add_photo.png" />
                                    </div>
                                    {/* <div className="d-flex flex-column justify-content-center">
                                    <p className="text-sm text-black mb-0">
                                      Klik untuk Menambahkan Gambar
                                    </p>
                                  </div> */}
                                    <input
                                      class="form-control"
                                      type="file"
                                      name="image"
                                      onChange={(e) =>
                                        setSelectedFile(e.target.files[0])
                                      }
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end mb-6">
                                {/* <a href="/radiografer-upload-gambar-panoramk"> */}
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-sm"
                                >
                                  Unggah Gambar
                                </button>
                                {/* </a> */}
                              </div>
                              <UploadGambarError />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
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

export default UploadGambarPanoramik;
