import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";

const DetailCatatanPasien = () => {
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
                          href="/dokter-catatan-pasien"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card-body px-0 pb-2 pt-0 pe-3">
                    <div class="row">
                      <div class="col pe-0">
                        <div class="card-header pb-0">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 font-weight-bolder">
                              Detail Catatan Pasien
                            </h6>
                          </div>
                          <div class="row mt-3">
                            <div class="col-2">
                              <p class="text-xs text-secondary mb-1">
                                Kode Pasien
                              </p>
                              <p class="text-xs font-weight-bolder mb-0">001</p>
                            </div>
                            <div class="col-2">
                              <p class="text-xs text-secondary mb-1">
                                Nama Pasien
                              </p>
                              <p class="text-xs font-weight-bolder mb-0">
                                Nurhidayah
                              </p>
                            </div>
                            <div class="col-3">
                              <p class="text-xs text-secondary mb-1">
                                Tanggal Verifikasi
                              </p>
                              <p class="text-xs font-weight-bolder mb-0">
                                01/10/2022
                              </p>
                            </div>
                            <div class="col-5 ">
                              <div class="d-flex justify-content-end mb-0">
                                <a href="/dokter-view-catatan-pasien">
                                  <button class="btn btn-primary btn-sm mb-0">
                                    Lihat Catatan Pasien
                                  </button>
                                </a>
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

                        <div class="card-body pb-2 pt-0">
                          <div class="row justify-content-center">
                            <div class="col-md-12">
                              <div
                                class="card shadow-none mt-2"
                                style={{ backgroundColor: "ghostwhite" }}
                              >
                                <div class="row d-flex justify-content-center mt-4 mb-4">
                                  <div class="col-8">
                                    <div class="card shadow-none mt-4 me-2 ms-2">
                                      <div class="card-body">
                                        <p class="text-sm font-weight-bolder text-dark">
                                          Rekam Medik#12342
                                        </p>
                                        <div class="row">
                                          <div class="col-3">
                                            <p class="text-xs text-secondary font-weight-bold">
                                              Tanggal Verifikasi
                                            </p>
                                          </div>
                                          <div class="col-4">
                                            <p class="text-xs text-primary font-weight-bold">
                                              01/10/2022
                                            </p>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-3">
                                            <p class="text-xs text-secondary font-weight-bold">
                                              Dokter Verifikator
                                            </p>
                                          </div>
                                          <div class="col-4">
                                            <p class="text-xs text-primary font-weight-bold">
                                              Drg. Ramadhan
                                            </p>
                                          </div>
                                        </div>
                                        <div class="row mt-4">
                                          <div class="col-12">
                                            <p class="text-xxs text-secondary font-weight-bold">
                                              Radiodiagnosis Sistem
                                            </p>
                                            <div class="row">
                                              <div class="col-2">
                                                <ul class="ps-3">
                                                  <li class="text-xs">
                                                    Gigi #11
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="col-10 ps-0">
                                                <p class="text-xs text-dark font-weight-bold mb-0 pb-2">
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
                                            <div class="row">
                                              <div class="col-2">
                                                <ul class="ps-3">
                                                  <li class="text-xs">
                                                    Gigi #22
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="col-4 ps-0">
                                                <p class="text-xs text-dark font-weight-bold">
                                                  Lesi Periapikal
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <p class="text-xxs text-secondary font-weight-bold">
                                              Radiodiagnosis Verifikator
                                            </p>
                                            <div class="row">
                                              <div class="col-2">
                                                <ul class="ps-3">
                                                  <li class="text-xs">
                                                    Gigi #11
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="col-10 ps-0">
                                                <p class="text-xs text-dark font-weight-bold mb-0 pb-2">
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
                                            <div class="row">
                                              <div class="col-2">
                                                <ul class="ps-3">
                                                  <li class="text-xs">
                                                    Gigi #22
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="col-4 ps-0">
                                                <p class="text-xs text-dark font-weight-bold">
                                                  Karies Gigi
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row">
                                          <div class="col-12">
                                            <p class="text-xxs text-secondary font-weight-bold">
                                              Interpretasi Manual
                                            </p>
                                            <div class="row">
                                              <div class="col-2">
                                                <ul class="ps-3">
                                                  <li class="text-xs">
                                                    Gigi #48
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="col-10 ps-0">
                                                <p class="text-xs text-dark font-weight-bold mb-0 pb-2">
                                                  Impaksi
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
                                            <div class="row">
                                              <div class="col-2">
                                                <ul class="ps-3">
                                                  <li class="text-xs">
                                                    Gigi #13
                                                  </li>
                                                </ul>
                                              </div>
                                              <div class="col-4 ps-0">
                                                <p class="text-xs text-dark font-weight-bold">
                                                  Lesi Periapikal
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
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default DetailCatatanPasien;
