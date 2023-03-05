import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const DataPasien = () => {
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
                    <div class="row">
                      <div class="col-6 d-flex align-items-center">
                        <h6 class="mb-0 font-weight-bolder">Data Pasien</h6>
                      </div>
                      <div class="col-6 text-end">
                        <a
                          class="btn bg-gradient-primary btn-sm mb-0"
                          href="/radiografer-add-data-pasien"
                        >
                          <i class="fas fa-plus"></i>&nbsp;&nbsp;Tambah Data
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0 text-center">
                              Kode RM
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Nama Pasien
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Radiografer
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-0 pe-0">
                              Tanggal Periksa
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Status
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2 pe-0 text-center">
                              Aksi
                            </th>
                            {/* <!-- <th class="text-secondary opacity-7"></th> --> */}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="ps-0">
                              <p class="text-xs text-secondary mb-0 text-center">
                                001
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Nurhidayah
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Ramadhan Hardani Putra, drg., M.Kes
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                23/04/18
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-success">
                                Selesai
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 ">
                              <p class="text-xs text-secondary mb-0 text-center">
                                002
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Evita Dwi Oktaviani Putri
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Dr. Eha Renwi Astuti, drg., M.Kes., SpRKG
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                11/01/19
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">003</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Aisyah Maulidiyah
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Otty Ratna Wahyuni drg., M.Kes
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                19/09/17
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">004</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Oktavian Fajar Rojaby
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Yunita Savitri, drg., M.Kes
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                24/12/08
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-success">
                                Selesai
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">005</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Florean Haya Soraya
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Dr. Sri Wigati Mardi Mulyani, drg., M.Kes
                              </p>
                            </td>

                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                04/10/21
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-success">
                                Selesai
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">006</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Rifki Yuda Pratama
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Deny Saputra, drg., M.Kes
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">007</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Fatih Khoiri
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Alhidayati Asymal, drg., M.Kes
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">008</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Ridlo
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Nastiti Faradilla Ramadhani, drg
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">009</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Ridlo
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Nastiti Faradilla Ramadhani, drg
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
                                </span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="ps-0 text-center">
                              <p class="text-xs text-secondary mb-0">010</p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Muh. Ridlo
                              </p>
                            </td>
                            <td class="align-middle text-start text-sm ps-2">
                              <p class="text-xs text-secondary mb-0">
                                Nastiti Faradilla Ramadhani, drg
                              </p>
                            </td>
                            <td class="align-middle text-start ps-0">
                              <span class="text-secondary text-xs font-weight-bold">
                                14/09/20
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm">
                              <span class="badge border-radius-xl badge-sm bg-gradient-warning">
                                Proses
                              </span>
                            </td>
                            <td class="align-middle text-start text-sm pe-0 text-center">
                              <a href="/radiografer-view-data-pasien">
                                <span class="badge text-secondary badge-sm bg-gradient-white border border-gray">
                                  Lihat Detail
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

export default DataPasien;
