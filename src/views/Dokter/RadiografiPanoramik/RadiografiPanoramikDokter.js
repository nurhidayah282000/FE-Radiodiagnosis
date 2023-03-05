import React from "react";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import RadiografiPanoramikCardDokter from "../../../component/Card/RadiografiPanoramikCardDokter";

const RadiografiPanoramikDokter = () => {
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
                    </div>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="row">
                      <di class="col-md-2">
                        <p class="btn btn-link m-0 ps-0  text-secondary text-xs font-weight-bold">
                          Semua Hasil
                        </p>
                      </di>
                      <di class="col-md-2">
                        <p class="ps-0 btn btn-link m-0 text-secondary text-xs font-weight-bold">
                          Telah Diverifikasi
                        </p>
                      </di>
                      <di class="col-md-2">
                        <p class="btn btn-link m-0 ps-0  text-secondary text-xs font-weight-bold">
                          Belum Diverifikasi
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
                      <RadiografiPanoramikCardDokter />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCardDokter />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCardDokter />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCardDokter />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCardDokter />
                    </div>
                    <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
                      <RadiografiPanoramikCardDokter />
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

export default RadiografiPanoramikDokter;
