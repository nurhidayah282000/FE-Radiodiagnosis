import React from "react";
import UploadGambarError from "../../../component/Alerts/UploadGambarError";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const UploadGambarPanoramik = () => {
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
                      <div class="col-2">
                        <p class="text-xs text-secondary mb-2">Kode RM</p>
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
                        </form>
                      </div>
                      <div class="col-3">
                        <p class="text-xs text-secondary mb-2">Nama Pasien</p>
                        <form>
                          <p
                            style={{ width: "100%" }}
                            class="form-control me-2 text-sm"
                          >
                            Nurhidayah
                          </p>
                        </form>
                      </div>
                      <div class="col-3 me-0">
                        <p class="text-xs text-secondary mb-2">Radiografer</p>
                        <select
                          class="form-select form-select-sm "
                          aria-label=".form-select-sm example"
                          style={{ width: "70%", height: "50%" }}
                        >
                          <option selected>Pilih Radiografer</option>
                          <option value="1">Drg. Nuhi</option>
                          <option value="2">Drg. Naufal</option>
                          <option value="3">Drg. Asmi</option>
                        </select>
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
                              Tambah Gambar Radiografi <br />
                              Panoramik.
                            </h6>
                          </div>
                          <div
                            class="d-flex justify-content-center"
                            style={{
                              height: "15rem",
                            }}
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
                            {/* <a href="/radiografer-upload-gambar-panoramk"> */}
                            <button class="btn btn-primary btn-sm">
                              Unggah Gambar
                            </button>
                            {/* </a> */}
                          </div>
                          <UploadGambarError />
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

export default UploadGambarPanoramik;
