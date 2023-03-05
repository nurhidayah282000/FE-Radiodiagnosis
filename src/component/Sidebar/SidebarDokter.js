import React from "react";
import SidebarFooterUser from "./SidebarFooterUser";

const SidebarDokter = () => {
  return (
    <div>
      <body class="g-sidenav-show bg-gray-100">
        <div class="min-height-300 bg-primary position-absolute w-100"></div>

        <aside
          class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <div class="sidenav-header">
            <i
              class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            ></i>
            <a class="navbar-brand m-0" target="_blank">
              <img
                src="../assets/img/App/logodental.png"
                class="navbar-brand-img h-100"
                alt="main_logo"
              />
            </a>
          </div>
          <hr class="horizontal dark mt-0" />
          <div
            class="collapse navbar-collapse w-auto"
            id="sidenav-collapse-main"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="/dokter-data-pasien">
                  <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <img src="../assets/img/App/data_pasien_active.png" />
                  </div>

                  <span class="nav-link-text ms-1">Data Pasien</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dokter-radiografi-panoramik">
                  <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <img src="../assets/img/App/radiografi_panoramik.png" />
                  </div>
                  <span class="nav-link-text ms-1">Radiografi Panoramik</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dokter-catatan-pasien">
                  <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <img src="../assets/img/App/catatan_pasien.png" />
                  </div>
                  <span class="nav-link-text ms-1">Catatan Pasien</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dokter-profil">
                  <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <img src="../assets/img/App/profil.png" />
                  </div>
                  <span class="nav-link-text ms-1">Profile</span>
                </a>
              </li>
            </ul>
          </div>
          <SidebarFooterUser />
        </aside>
      </body>
    </div>
  );
};

export default SidebarDokter;
