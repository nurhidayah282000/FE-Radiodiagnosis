import React from "react";
import HistoryCard from "../../../component/Card/HistoryCard";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const ViewHistory = () => {
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
                          href="/radiografer-history"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card-body px-0 pb-2 pt-0 pe-3 pl-0">
                    <div class="row">
                      <div class="col pe-0">
                        <div class="card-header pb-2 ps-0">
                          <div class="d-flex align-items-center">
                            <h6 class="mb-0 font-weight-bolder">
                              Detail History Pasien
                            </h6>
                          </div>
                          <div class="row mt-3">
                            <div class="col-3">
                              <p class="text-xs text-secondary mb-1">Kode RM</p>
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
                            marginStart: "0px",
                          }}
                        />

                        <div class="card-body pb-2 pt-0">
                          <div class="row justify-content-center">
                            <div class="col-md-12">
                              <HistoryCard />
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

export default ViewHistory;
