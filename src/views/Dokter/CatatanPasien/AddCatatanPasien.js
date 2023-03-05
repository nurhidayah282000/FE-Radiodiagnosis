import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";

const AddCatatanPasien = () => {
  return (
    <div>
      <body class="g-sidenav-show bg-gray-100">
        <div class="min-height-300 bg-primary position-absolute w-100"></div>
        <aside
          class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <SidebarDokter />
        </aside>
        <main class="main-content position-relative border-radius-lg">
          <HeaderDataUser />
          <div class="container-fluid py-2">
            <div class="row p-0">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header pb-2 p-4">
                    <div class="row">
                      <div class="col-8 d-flex align-items-center">
                        <a
                          class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2"
                          href="dokter-catatan-pasien"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-2">
                        <p class="text-xs text-secondary mb-2">Kode RM</p>
                        <select
                          class="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          style={{ width: "70%" }}
                        >
                          <option selected>Kode RM</option>
                          <option value="1">001</option>
                          <option value="2">002</option>
                          <option value="3">003</option>
                        </select>
                    
                      </div>
                      <div class="col-3">
                        <p class="text-xs text-secondary mb-2">Nama Pasien</p>
                        <p class="text-xs font-weight-bolder mb-0">
                          Nurhidayah
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{
                      height: "1 px",
                      borderWidth: "0 px",
                      color: "gray",
                      backgroundColor: "gray",
                      marginBottom: "0 px",
                      marginTop: "0 px",
                    }}
                  />

                  <div class="card-body px-0 pb-2 pt-0">
                    <div class="row justify-content-center">
                      <div class="col-md-6">
                        <div class="card shadow-none border-0">
                          <div class="card-header pb-0">
                            <div class="d-flex align-items-center">
                              <h6 class="mb-0 font-weight-bolder">
                                Tambah Catatan Pasien
                              </h6>
                            </div>
                          </div>

                          <div class="card-body pt-3">
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label text-secondary"
                                  >
                                    Catatan Pasien
                                  </label>
                                  <textarea
                                    class="form-control"
                                    style={{ height: "20rem" }}
                                    type="text"
                                    placeholder="Masukkan catatan pasien"
                                    value=""
                                  ></textarea>
                                </div>
                                <div class="d-flex justify-content-end mt-4">
                                  <a href="/dokter-add-catatan-pasien">
                                    <button class="btn btn-primary btn-sm ms-auto">
                                      Simpan Catatan Pasien
                                    </button>
                                  </a>
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

export default AddCatatanPasien;
