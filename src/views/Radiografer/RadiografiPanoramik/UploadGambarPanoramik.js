import axios from "axios";
import { React, useState, useEffect } from "react";
import UploadGambarError from "../../../component/Alerts/UploadGambarError";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import { baseURL } from "../../../routes/Config";

const UploadGambarPanoramik = () => {
  const [data, setData] = useState({});
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("patient-");
  const [patient, setPatient] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/patients/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPatients(response.data.data);
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

  const handleUploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("panoramikPicture", selectedFile);

    axios
      .post(`${baseURL}/radiographics/patients/${patientId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSelectedFile(null)
        window.location.href="/radiografer-radiografi-panoramik"
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
                          <p className="text-xs text-secondary mb-2">Kode RM</p>
                          <select
                            className="form-select form-select-sm"
                            aria-label=".form-select-sm example"
                            style={{ width: "70%" }}
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
                        </div>
                        <div className="col-3">
                          <p className="text-xs text-secondary mb-2">
                            Nama Pasien
                          </p>
                          <p className="text-xs font-weight-bolder mb-0">
                            {patient?.fullname}
                          </p>
                        </div>
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
};

export default UploadGambarPanoramik;
