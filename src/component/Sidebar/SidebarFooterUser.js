import React from "react";

const SidebarFooterUser = () => {
  return (
    <div>
      <div class="sidenav-footer mx-3 pt-7">
        <div class="card card-plain shadow-none" id="sidenavCard">
          <img
            class="w-50 mx-auto"
            src="../assets/img/illustrations/icon-documentation.svg"
            alt="sidebar_illustration"
          />
          <div class="card-body text-center p-3 w-100 pt-0">
            <div class="docs-info">
              <p class="text-xs font-weight-bold mb-0">Radiodiagnosis</p>
            </div>
          </div>
        </div>
        <a href="/login-user" class="btn btn-outline-danger btn-sm w-100 mb-3">
          Keluar
        </a>
      </div>
    </div>
  );
};

export default SidebarFooterUser
