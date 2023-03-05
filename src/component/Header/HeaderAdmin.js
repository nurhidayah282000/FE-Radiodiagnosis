import React from "react";
import SidebarAdmin from "../Sidebar/SidebarAdmin";

const HeaderAdmin = () => {
  return (
    <div>
      <body class="g-sidenav-show bg-gray-100">
        <div class="min-height-300 bg-primary position-absolute w-100"></div>

        <main class="main-content position-relative border-radius-lg">
          {/* <!-- Navbar --> */}
          <nav
            class="navbar navbar-main navbar-expand-lg shadow-none border-radius-xl px-0"
            id="navbarBlur"
            data-scroll="false"
          >
            <div class="container-fluid py-1 px-0">
              <nav aria-label="breadcrumb"></nav>
              <div
                class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                id="navbar"
              >
                <div class="ms-md-auto  d-flex align-items-center">
                  <ul class="navbar-nav justify-content-end">
                    <li class="nav-item d-flex align-items-center">
                      <a
                        href="javascript:;"
                        class="nav-link text-white font-weight-bold px-0"
                      >
                        <div class="d-flex pr-0">
                          <div class="d-flex flex-column">
                            <h6 class="mb-0 text-sm text-white d-flex justify-content-end">
                              Admin
                            </h6>
                            <p class="text-xs text-white mb-0 d-flex justify-content-end">
                              Radiodiagnostic Report
                            </p>
                          </div>
                          <div class="ps-2 me-0">
                            <img
                              src="../assets/img/App/admin2.png"
                              class="avatar avatar-sm"
                              alt="user1"
                            />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                      <a
                        href="javascript:;"
                        class="nav-link text-white p-0"
                        id="iconNavbarSidenav"
                      >
                        <div class="sidenav-toggler-inner">
                          <i class="sidenav-toggler-line bg-white"></i>
                          <i class="sidenav-toggler-line bg-white"></i>
                          <i class="sidenav-toggler-line bg-white"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar --> */}
        </main>
      </body>
    </div>
  );
};

export default HeaderAdmin;
