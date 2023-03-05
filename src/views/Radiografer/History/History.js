import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const History = () => {
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
            <div class="row p-0">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header pb-2 p-4">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0 font-weight-bolder">History Pasien</h6>
                    </div>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th class="w-4 col-1 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0">
                              Kode RM
                            </th>
                            <th class="col-8 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">
                              Nama Pasien
                            </th>

                            <th class="col-2 text-uppercase text-secondary text-start text-xxs font-weight-bolder opacity-7 ps-2 pe-0">
                              Aksi
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary mb-0 text-center">
                                001
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Nurhidayah
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                002
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Evita Dwi Oktaviani Putri
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                003
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Aisyah Maulidiyah
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                004
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Oktavian Fajar Rojaby
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                005
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Florean Haya Soraya
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                006
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Rifki Yuda Pratama
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                007
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Fatih Khoiri
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                008
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Ridlo
                              </p>
                            </td>
                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                009
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Ridlo
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary text-center mb-0">
                                010
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-4">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Ridlo
                              </p>
                            </td>

                            <td class="align-middle text-sm">
                              <a href="/radiografer-view-history">
                                <span class="btn mt-2 mb-2 shadow-none badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat History Pasien
                                </span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default History;
