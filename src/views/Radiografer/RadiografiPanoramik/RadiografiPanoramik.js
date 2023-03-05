import React from "react";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import RadiografiPanoramikCard from "../../../component/Card/RadiografiPanoramikCard";
import UploadGambarSuccess from "../../../component/Alerts/UploadGambarSuccess";

const RadiografiPanoramik = () => {
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
          <HeaderUser />
          <div class="container-fluid py-2">
            <div class="row mb-4">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header p-1">
                    <div class="row p-2">
                      <div class="col card-header p-4 pt-3">
                        <h6 class="font-weight-bolder">Radiografi Panoramik</h6>
                        <p class="text-xs text-secondary mb-0">
                          Hasil diagnosa pada tabel di bawah merupakan hasil
                          diagnosa
                          <br />
                          sementara yang perlu diverifikasi oleh dokter
                        </p>
                      </div>
                      <div class="col card-header pt-3 text-end">
                        <a
                          class="btn bg-gradient-primary btn-sm mb-0"
                          href="/radiografer-upload-gambar-panoramik"
                        >
                          <i class="fas fa-plus"></i>&nbsp;&nbsp;Upload Gambar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="row">
                      <div class="col-md-2">
                        <p class="ps-0 text-uppercase text-secondary text-xxs font-weight-bolder">
                          Rekapitulasi
                        </p>
                      </div>
                      <div class="col-md-2">
                        {/* <p class="ps-4 text-uppercase text-primary text-xxs font-weight-bolder">
                          Oktober
                        </p> */}

                        <div class="row-cols-md-3 ">
                          <div>
                            <select class=" ps-4 text-uppercase text-primary textr-start text-xxs font-weight-bolder border-0">
                              <option>Januari</option>
                              <option>Februari</option>
                              <option>Maret</option>
                              <option>April</option>
                              <option>Mei</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <di class="col-md-2">
                        <p class="ps-4 text-uppercase text-primary text-xxs font-weight-bolder">
                          21 <span>Gambar</span>
                        </p>
                      </di>
                      <di class="col-md-2">
                        <p class="btn btn-link mb-0 btn-sm mt-0 pt-0 ps-4 text-uppercase text-primary text-xxs font-weight-bolder">
                          <i
                            class="fa fa-cloud-download"
                            aria-hidden="true"
                          ></i>{" "}
                          &nbsp; Download
                        </p>
                      </di>
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
                    </div>
                  </div>
                  {/* <!-- </card> --> */}
                  <div class="row p-3 ">
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCard />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCard />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCard />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCard />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCard />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCard />
                    </div>
                    <UploadGambarSuccess/>
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

export default RadiografiPanoramik;
