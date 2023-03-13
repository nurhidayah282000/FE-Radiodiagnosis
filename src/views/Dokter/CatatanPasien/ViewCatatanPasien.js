import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import DeleteModal from "../../../component/Modal/DeleteModal";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import { baseURL } from "../../../routes/Config";

const ViewCatatanPasien = () => {
  const [data, setData] = useState({});
  const [manualInterpretation, setManualInterpretation] = useState({
    manualInterpretation: "",
  });

  const { id } = useParams();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${baseURL}/radiographics/detail/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
          setManualInterpretation({
            manualInterpretation: response.data.data.manual_interpretation,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setManualInterpretation({
      ...manualInterpretation,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${baseURL}/radiographics/edit/${id}/interpretation`,
        manualInterpretation,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.location.href = `/dokter-detail-catatan-pasien/${id}`;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .put(
        `${baseURL}/radiographics/delete/${id}/interpretation`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.location.href = `/dokter-detail-catatan-pasien/${id}`;
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
                        <Link to={`/dokter-detail-catatan-pasien/${id}`}>
                          <i
                            className="fa fa-arrow-left"
                            aria-hidden="true"
                          ></i>
                          &nbsp;&nbsp;Kembali
                        </Link>
                      </div>

                      <div className="col">
                        <div className="row">
                          <div className="col-6 d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn btn-outline-success btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-success"
                              onClick={handleSubmit}
                            >
                              <i className="fa fa-pencil text-success"></i>
                              &nbsp; Edit Catatan
                            </button>
                          </div>
                          <div className="col-6">
                            <button
                              type="button"
                              className="btn btn-outline-danger btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-danger"
                              style={{ backgroundColor: "#FFE9EA" }}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="fa fa-trash text-danger"></i>&nbsp;
                              Hapus Catatan
                            </button>
                            <DeleteModal
                              userId={id}
                              handleDelete={handleDelete}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body px-0 pb-2 pt-0">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <div className="card shadow-none border-0">
                          <div className="card-header pb-0">
                            <div className="d-flex align-items-center">
                              <h6 className="mb-0 font-weight-bolder">
                                Catatan Pasien
                              </h6>
                            </div>
                          </div>

                          <div className="card-body pt-3">
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label
                                    for="example-text-input"
                                    className="form-control-label text-secondary"
                                  >
                                    Catatan Pasien
                                  </label>
                                  <textarea
                                    className="form-control"
                                    style={{ height: "20rem" }}
                                    type="text"
                                    placeholder="Masukkan catatan pasien"
                                    value={
                                      manualInterpretation.manualInterpretation
                                    }
                                    name="manualInterpretation"
                                    onChange={handleChange}
                                  ></textarea>
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

export default ViewCatatanPasien;
