import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import DeleteModal from "../../../component/Modal/DeleteModal";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const ViewGambarPanoramik = () => {
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
            <div class="row p-0">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header pb-2 p-4">
                    <div class="row">
                      <div class="col-8 d-flex align-items-center">
                        <a
                          class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2"
                          href="/radiografer-radiografi-panoramik"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>

                      <div class="col">
                        <div class="row">
                          <div class="col-7 d-flex justify-content-end">
                            <a
                              class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-secondary"
                              href="/radiografer-upload-ulang-gambar-panoramik"
                            >
                              <i class="fa fa-cloud-upload"></i>&nbsp;&nbsp;
                              Unggah Ulang Gambar
                            </a>
                          </div>
                          <div class="col-5">
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="fa fa-trash text-danger"></i>
                              &nbsp;&nbsp; Hapus Gambar
                            </button>
                          </div>
                          <DeleteModal />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body px-0 pb-2 pt-0 pe-3">
                    <div class="row">
                      <div class="col pe-0">
                        <div class="card-header pb-0 ps-0">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 font-weight-bolder">
                              Verifikasi Gambar Radiografi Panoramik
                            </h6>
                          </div>
                          <div class="row mt-3">
                            <div class="col-3">
                              <p class="text-xs text-secondary mb-1">
                                Kode Pasien
                              </p>
                              <p class="text-xs font-weight-bolder mb-0">001</p>
                            </div>
                            <div class="col-3">
                              <p class="text-xs text-secondary mb-1">
                                Nama Pasien
                              </p>
                              <p class="text-xs font-weight-bolder mb-0">
                                Nurhidayah
                              </p>
                            </div>
                            <div class="col-3">
                              <p class="text-xs text-secondary mb-1">
                                Tanggal Periksa
                              </p>
                              <p class="text-xs font-weight-bolder mb-0">
                                23/04/2018
                              </p>
                            </div>
                            <div class="col-3">
                              <p class="text-xs text-secondary mb-1">Status</p>
                              <p class="text-xs font-weight-bolder mb-0 text-warning">
                                Belum Diverifikasi oleh Dokter
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

                        <div class="card-body pb-2 pt-0">
                          <div class="row justify-content-center">
                            <div class="col-md-12">
                              <div
                                class="card shadow-none mt-2"
                                style={{ backgroundColor: "ghostwhite" }}
                              >
                                <div class="row d-flex justify-content-center mt-4">
                                  <div class="col-8">
                                    <p class="text-xs p-2 mb-0">
                                      Gambar Radiografi
                                    </p>

                                    <img
                                      class="img-fluid border-radius-xl p-2"
                                      src="../assets/img/App/panoramik.jpg"
                                    />

                                    <p class="text-xs p-2 mb-0 mt-4">
                                      Diagram Gigi
                                    </p>

                                    <div class="card shadow-none mt-2 me-2 ms-2 mb-4">
                                      <div class="card-body">
                                        <div class="row">
                                          <div class="d-flex justify-content-center img-fluid mb-2">
                                            <img src="../assets/img/App/line.png" />
                                          </div>
                                          <div class="col d-flex justify-content-center">
                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck1"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck1"
                                            >
                                              55
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck2"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck2"
                                            >
                                              54
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck3"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck3"
                                            >
                                              53
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck4"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck4"
                                            >
                                              52
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck5"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck5"
                                            >
                                              51
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck6"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck6"
                                            >
                                              61
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck7"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck7"
                                            >
                                              62
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck8"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck8"
                                            >
                                              63
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck9"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck9"
                                            >
                                              64
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck10"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck10"
                                            >
                                              65
                                            </label>
                                          </div>
                                          <div class="col d-flex justify-content-center">
                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck11"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck11"
                                            >
                                              18
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck12"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck12"
                                            >
                                              17
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck13"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck13"
                                            >
                                              16
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck14"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck14"
                                            >
                                              15
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck15"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck15"
                                            >
                                              14
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck16"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck16"
                                            >
                                              13
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck17"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck17"
                                            >
                                              12
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck18"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck18"
                                            >
                                              11
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck19"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck19"
                                            >
                                              21
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck20"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck20"
                                            >
                                              22
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck21"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck21"
                                            >
                                              23
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck22"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck22"
                                            >
                                              24
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck23"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck23"
                                            >
                                              25
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck24"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck24"
                                            >
                                              26
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck25"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck25"
                                            >
                                              27
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck26"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck26"
                                            >
                                              28
                                            </label>
                                          </div>
                                          <div class="d-flex justify-content-center img-fluid mt-2">
                                            <img src="../assets/img/App/line2.png" />
                                          </div>
                                          <div class="d-flex justify-content-center img-fluid mt-5">
                                            <img src="../assets/img/App/line2.png" />
                                          </div>

                                          <div class="col d-flex justify-content-center mt-1">
                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck27"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck27"
                                            >
                                              48
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck28"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck28"
                                            >
                                              47
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck29"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck29"
                                            >
                                              46
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck30"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck30"
                                            >
                                              45
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck31"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck31"
                                            >
                                              44
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck32"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck32"
                                            >
                                              43
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck33"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck33"
                                            >
                                              42
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck34"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck34"
                                            >
                                              41
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck35"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck35"
                                            >
                                              31
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck36"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck36"
                                            >
                                              32
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck37"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck37"
                                            >
                                              33
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck38"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck38"
                                            >
                                              34
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck39"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck39"
                                            >
                                              35
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck40"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck40"
                                            >
                                              36
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck41"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck41"
                                            >
                                              37
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck42"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2"
                                              for="btncheck42"
                                            >
                                              38
                                            </label>
                                          </div>

                                          <div class="col d-flex justify-content-center">
                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck43"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck43"
                                            >
                                              85
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck44"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck44"
                                            >
                                              84
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck45"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck45"
                                            >
                                              83
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck46"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck46"
                                            >
                                              82
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck47"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck47"
                                            >
                                              81
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck48"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck48"
                                            >
                                              71
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck49"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck49"
                                            >
                                              72
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck50"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck50"
                                            >
                                              73
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck51"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck51"
                                            >
                                              74
                                            </label>

                                            <input
                                              type="checkbox"
                                              class="btn-check"
                                              id="btncheck52"
                                              autocomplete="off"
                                            />
                                            <label
                                              class="btn btn-outline-secondary text-xs p-2 mb-0"
                                              for="btncheck52"
                                            >
                                              75
                                            </label>
                                          </div>
                                          <div class="d-flex justify-content-center img-fluid mt-2 mb-4">
                                            <img src="../assets/img/App/line.png" />
                                          </div>
                                          <div class="d-grid">
                                            <button
                                              class="btn btn-sm btn-primary mt-2 mb-2"
                                              type="button"
                                            >
                                              Deteksi Sistem
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="card shadow-none mt-4 me-2 ms-2">
                                      <div class="card-body">
                                        <p class="text-xs">
                                          Radiodiagnosis Sistem
                                        </p>
                                        <div class="row">
                                          <div class="col-2">
                                            <ul class="ps-3">
                                              <li class="text-xs">Gigi #11</li>
                                            </ul>
                                          </div>
                                          <div class="col-4 ps-0">
                                            <p class="text-xs text-dark font-weight-bold">
                                              Karies Gigi
                                            </p>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-2">
                                            <ul class="ps-3">
                                              <li class="text-xs">Gigi #22</li>
                                            </ul>
                                          </div>
                                          <div class="col-4 ps-0">
                                            <p class="text-xs text-dark font-weight-bold">
                                              Lesi Periapikal
                                            </p>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-2">
                                            <ul class="ps-3">
                                              <li class="text-xs">Gigi #48</li>
                                            </ul>
                                          </div>
                                          <div class="col-4 ps-0">
                                            <p class="text-xs text-dark font-weight-bold">
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
