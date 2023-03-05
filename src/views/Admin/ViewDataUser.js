import React from "react";
import HeaderAdmin from "../../component/Header/HeaderAdmin";
import SidebarAdmin from "../../component/Sidebar/SidebarAdmin";

export const ViewDataUser = () => {
  return (
    <div>
      <body class="g-sidenav-show bg-gray-100">
        <div class="min-height-300 bg-primary position-absolute w-100"></div>
        <aside
          class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <SidebarAdmin />
        </aside>
        <main class="main-content position-relative border-radius-lg">
          <HeaderAdmin />
          <div class="container-fluid py-2">
            <div class="row p-0">
              <div class="col-12">
                <div class="card mb-4">
                  <div class="card-header pb-2 p-4">
                    <div class="row">
                      <div class="col-6 d-flex align-items-center">
                        <a
                          class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2"
                          href="/data-user"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="card-body px-0 pb-2 pt-0">
                    <div class="row justify-content-center">
                      <div class="col-md-6">
                        <div class="card shadow-none border-0">
                          <div class="card-header pb-0">
                            <div class="d-flex align-items-center">
                              <h6 class="mb-0 font-weight-bolder">Data User</h6>
                            </div>
                          </div>

                          <div class="card-body pt-3">
                            <div class="row mt-2">
                              <div class="col">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Nama Lengkap
                                  </label>

                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan nama lengkap anda"
                                    value=""
                                  >
                                    Ramadhan Hardani Putra, drg., M.Kes
                                  </p>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    NIP
                                  </label>
                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan NIP"
                                    value=""
                                  >
                                    731604680766969
                                  </p>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Email
                                  </label>
                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan email anda"
                                    value=""
                                  >
                                    ramadhan@gmail.com
                                  </p>
                                </div>
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Nomor Telepon
                                  </label>
                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan nomor telepon anda"
                                    value=""
                                  >
                                    0845768768178
                                  </p>
                                </div>

                                <div class="row">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Jenis Kelamin
                                  </label>
                                </div>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="options-outlined"
                                  id="Laki-Laki"
                                  autocomplete="off"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary btn-sm"
                                  for="Laki-Laki"
                                >
                                  Laki-Laki
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="options-outlined"
                                  id="Perempuan"
                                  autocomplete="off"
                                />
                                <label
                                  class="btn btn-outline-secondary btn-sm"
                                  for="Perempuan"
                                >
                                  Perempuan
                                </label>
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Profesi
                                  </label>
                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan profesi anda"
                                    value=""
                                  >
                                    Radiografer
                                  </p>
                                </div>
                              </div>
                            </div>{" "}
                            <div class="row">
                              <div class="col-md-12">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Alamat
                                  </label>
                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan alamat anda"
                                    value=""
                                  >
                                    Jl. Ahmad Yani, Perumahan Griya Kenari nomor
                                    10
                                  </p>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="form-group">
                                  <label
                                    for="exampleFormControlSelect1"
                                    class="form-control-label"
                                  >
                                    Provinsi
                                  </label>
                                  <p
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    Jawa Timur
                                  </p>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="form-group">
                                  <label
                                    for="exampleFormControlSelect1"
                                    class="form-control-label"
                                  >
                                    Kota
                                  </label>
                                  <p
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    Surabaya
                                  </p>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Kode Pos
                                  </label>
                                  <p
                                    class="form-control"
                                    type="text"
                                    placeholder="Kode pos"
                                    value=""
                                  >731562</p>
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
