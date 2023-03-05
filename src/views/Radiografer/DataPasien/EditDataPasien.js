import React from "react";
import HeaderDataUser from "../../../component/Header/HeaderDataUser";
import SidebarRadiografer from "../../../component/Sidebar/SidebarRadiografer";

const EditDataPasien = () => {
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
                      <div class="col-6 d-flex align-items-center">
                        <a
                          class="btn btn-outline-secondary btn-sm mb-0 pt-1 pb-1 ps-2 pe-2"
                          href="/radiografer-data-pasien"
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
                                Edit Data Pasien
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
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan nama lengkap pasien"
                                    value=""
                                  />
                                </div>
                                <div class="row-cols-md-3">
                                  <div class="form-group">
                                    <label
                                      for="example-text-input"
                                      class="form-control-label"
                                    >
                                      Nomor Rekam Medik
                                    </label>
                                    <input
                                      class="form-control"
                                      type="text"
                                      placeholder="Nomor RM pasien"
                                      value=""
                                    />
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label
                                    for="example-text-input"
                                    class="form-control-label"
                                  >
                                    NIK (Nomor Induk Kewarganegaraan)
                                  </label>
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan NIK pasien"
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

                                <div class="row-cols-md-3">
                                  <div class="form-group">
                                    <label
                                      for="exampleFormControlSelect1"
                                      class="form-control-label"
                                    >
                                      Agama
                                    </label>

                                    <select
                                      class="form-select"
                                      id="exampleFormControlSelect1"
                                    >
                                      <option>Islam</option>
                                      <option>Kristen</option>
                                      <option>Budha</option>
                                      <option>Hindu</option>
                                      <option>Protestan</option>
                                    </select>
                                  </div>
                                </div>

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

                                <label
                                  for="example-text-input"
                                  class="form-control-label"
                                >
                                  Tempat Tanggal Lahir
                                </label>

                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Tempat lahir"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Tanggal lahir"
                                        value=""
                                      />
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
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Tahun"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <div class="form-group">
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Bulan"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-3">
                                    <div class="form-group">
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Hari"
                                        value=""
                                      />
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
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Masukkan nomor telepon"
                                    value=""
                                  />
                                </div>

                                <div class="form-group">
                                  <label
                                    for="exampleFormControlSelect1"
                                    class="form-control-label"
                                  >
                                    Asal Rujukan
                                  </label>
                                  <select
                                    class="form-select"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>Radiologi</option>
                                    <option>
                                      Bedah Mulut dan Maksilofasial
                                    </option>
                                    <option>Ilmu Kedokteran Gigi Anak</option>
                                    <option>Ilmu Penyakit Mulut</option>
                                    <option>Konservasi Gigi</option>
                                    <option>Prostodonsia</option>
                                    <option>Periodonsia</option>
                                    <option>Ortodonti</option>
                                    <option>Umum</option>
                                  </select>
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
                                  <select
                                    class="form-select"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>pilih radiografer</option>
                                    <option>ramadhan</option>
                                    <option>nuhi</option>
                                    <option>siska</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex justify-content-end mt-4">
                              <a href="/radiografer-edit-data-pasien">
                                <button class="btn btn-primary btn-sm ms-auto">
                                  Simpan Data Pasien
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

export default EditDataPasien;
