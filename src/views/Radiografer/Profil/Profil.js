import React from "react";
import ContactAlert from "../../../component/Alerts/ContactAlert";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";
import Kontak from "./Kontak";
import UbahPassword from "./UbahPassword";
import ViewProfil from "./ViewProfil";

const Profil = () => {
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
                  <div class="card-header pb-2 p-4 ">
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-biodata-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-biodata"
                          type="button"
                          role="tab"
                          aria-controls="pills-biodata"
                          aria-selected="true"
                        >
                          Data Diri
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-password-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-password"
                          type="button"
                          role="tab"
                          aria-controls="pills-password"
                          aria-selected="false"
                        >
                          Ubah Password
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Kontak
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-biodata"
                        role="tabpanel"
                        aria-labelledby="pills-biodata-tab"
                      >
                        <ViewProfil />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-password"
                        role="tabpanel"
                        aria-labelledby="pills-password-tab"
                      >
                        <UbahPassword />
                      </div>
                      <div
                        class="tab-pane fade "
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <Kontak />
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

export default Profil;
