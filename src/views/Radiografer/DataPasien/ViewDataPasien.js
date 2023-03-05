import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import DeleteModal from "../../../component/Modal/DeleteModal";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const ViewDataPasien = () => {
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
                          href="/radiografer-data-pasien"
                        >
                          <i class="fa fa-arrow-left" aria-hidden="true"></i>
                          &nbsp;&nbsp;Kembali
                        </a>
                      </div>

                      <div class="col">
                        <div class="row">
                          <div class="col-6 d-flex justify-content-end">
                            <a
                              class="btn btn-outline-success btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-success"
                              href="/radiografer-edit-data-pasien"
                            >
                              <i class="fa fa-pencil text-success"></i>
                              &nbsp;&nbsp; Edit Data Pasien
                            </a>
                          </div>
                          <div class="col-6">
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm mb-0 pt-1 pb-1 ps-2 pe-2 text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="fa fa-trash text-danger"></i>
                              &nbsp;&nbsp; Hapus Data Pasien
                            </button>
                            <DeleteModal />
                          </div>
                        </div>
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
                                Data Pasien
                              </h6>
                            </div>
                          </div>

                          <div class="card-body pt-3">
                            <div class="row">
                              <div class="col">
                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Nama Lengkap
                                  </label>
                                  <p class="form-control" type="text">
                                    Nurhidayah
                                  </p>
                                </div>
                                <div class="row-cols-md-3">
                                  <div class="form-group">
                                    <label
                                      for="example-text-input"
                                      class="form-control-label"
                                    >
                                      Nomor Rekam Medik
                                    </label>
                                    <p class="form-control" type="text">
                                      001
                                    </p>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    NIK (Nomor Induk Kewarganegaraan)
                                  </label>
                                  <p class="form-control" type="text">
                                    731604680900003
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

                                <div class="row-cols-md-3">
                                  <div class="form-group">
                                    <label
                                      for="exampleFormControlSelect1"
                                      class="form-control-label"
                                    >
                                      Agama
                                    </label>
                                    <p class="form-control" type="text">
                                      Islam
                                    </p>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Alamat
                                  </label>
                                  <p class="form-control" type="text">
                                    Jl.Poros Kotu-Masalle, Enrekang
                                  </p>
                                </div>

                                <label
                                  for="example-text-input"
                                  class="form-control-label"
                                >
                                  Tempat Tanggal Lahir
                                </label>

                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <p class="form-control" type="text">
                                        Enrekang
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <p class="form-control" type="text">
                                        28/09/2000
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <label
                                  for="example-text-input"
                                  class="form-control-label"
                                >
                                  Umur Pasien
                                </label>
                                <div class="row">
                                  <div class="col-md-3">
                                    <div class="form-group">
                                      <p class="form-control" type="text">
                                        22
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <div class="form-group">
                                      <p class="form-control" type="text">
                                        3
                                      </p>
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <div class="form-group">
                                      <p class="form-control" type="text">
                                        14
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    Nomor Telepon
                                  </label>
                                  <p class="form-control" type="text">
                                    0853145797
                                  </p>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="exampleFormControlSelect1"
                                    class="form-control-label"
                                  >
                                    Asal Rujukan
                                  </label>
                                  <p class="form-control" type="text">
                                    Konservasi Gigi
                                  </p>
                                </div>
                                <hr class="horizontal dark" />
                                <p class=" text-sm text-uppercase">
                                  Data Radiografer
                                </p>
                                <div class="form-group">
                                  <label
                                    for="exampleFormControlSelect1"
                                    class="form-control-label"
                                  >
                                    Pilih Radiografer
                                  </label>
                                  <p class="form-control" type="text">
                                    Ramadhan
                                  </p>
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

export default ViewDataPasien;
