import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const UploadUlangGambarPanoramik = () => {
  return (
    <div>
      <body class="g-sidenav-show bg-gray-100">
        <div class="min-height-300 bg-primary position-absolute w-100"></div>
        <aside
          class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <SidebarRadiografer />
        </aside>
        <main class="main-content position-relative border-radius-lg">
          <HeaderDataUser />
          <div class="container-fluid py-2">
            <div class="row mb-4 h-100">
              <div class="col-12">
                <div class="card mb-4 h-100">
                  <div class="card-header pb-2 p-4">
                    <div class="row">
                      <div class="col-6 d-flex align-items-center">
                        <a
                          class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2"
                          href="/radiografer-radiografi-panoramik"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-3">
                        <p class="text-xs text-secondary mb-0">Kode Pasien</p>
                        <p class="text-xs font-weight-bolder mb-0">001</p>
                      </div>
                      <div class="col-3">
                        <p class="text-xs text-secondary mb-0">Nama Pasien</p>
                        <p class="text-xs font-weight-bolder mb-0">
                          Nurhidayah
                        </p>
                      </div>
                      <div class="col-3">
                        <p class="text-xs text-secondary mb-0">Radiografer</p>
                        <p class="text-xs font-weight-bolder mb-0">
                          Drg. Ramadhan
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

                  <div class="card-body px-0 pb-2 pt-0">
                    <div class="row justify-content-center">
                      <div class="col-md-6">
                        <div class="card-header pb-0">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-3 font-weight-bolder">
                              Uggah Ulang Gambar
                              <br />
                              Radiografi Panoramik.
                            </h6>
                          </div>
                          <div
                            class="d-flex justify-content-center"
                            style={{ height: "15rem" }}
                          >
                            <div
                              class="card shadow-none"
                              style={{
                                width: "35rem",
                                height: "12rem",
                                border: "2px dashed gainsboro",
                                backgroundColor: "ghostwhite",
                              }}
                            >
                              <div class="d-flex justify-content-center mt-6 pt-2">
                                <div>
                                  <img src="../assets/img/App/add_photo.png" />
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-sm text-black mb-0">
                                    Klik untuk Menambahkan Gambar
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-end mb-6">
                            <button class="btn btn-primary btn-sm">
                              Unggah Gambar
                            </button>
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

export default UploadUlangGambarPanoramik;
