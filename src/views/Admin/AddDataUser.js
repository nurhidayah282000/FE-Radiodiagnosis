import React from "react";
import HeaderAdmin from "../../component/Header/HeaderAdmin";
import SidebarAdmin from "../../component/Sidebar/SidebarAdmin";

const AddDataUser = () => {
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
                              <h6 class="mb-0 font-weight-bolder">
                                Tambah Data User
                              </h6>
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
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan nama lengkap anda"
                                    value=""
                                  />
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    NIP
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan NIP"
                                    value=""
                                  />
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Email
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan email anda"
                                    value=""
                                  />
                                </div>
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Nomor Telepon
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan nomor telepon anda"
                                    value=""
                                  />
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
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan profesi anda"
                                    value=""
                                  />
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
                                  <textarea
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan alamat anda"
                                    value=""
                                  ></textarea>
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
                                  <select
                                    class="form-select"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>Provinsi</option>
                                    <option>Sulawesi Selatan</option>
                                    <option>Jawa Timur</option>
                                    <option>Jawa Tengah</option>
                                    <option>DKI Jakarta</option>
                                    <option>Jawa Barat</option>
                                  </select>
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
                                  <select
                                    class="form-select"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>Kota</option>
                                    <option>Makassar</option>
                                    <option>Surabaya</option>
                                    <option>Semarang</option>
                                    <option>Jakarta</option>
                                    <option>Banten</option>
                                  </select>
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
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Kode pos"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="d-flex justify-content-end mt-4">
                              <a href="/data-user">
                                <button class="btn btn-primary btn-sm ms-auto">
                                  Simpan Data 
                                </button>
                              </a>
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

export default AddDataUser;
