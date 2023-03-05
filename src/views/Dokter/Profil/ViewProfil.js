import React from "react";

const ViewProfil = () => {
  return (
    <div>
      <div class="card-body px-0 pb-2 mt-2">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-none border-0">
              <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0 font-weight-bolder">Data Diri</h6>
                </div>
              </div>
              <div class="card-body">
                <div class="row gx-4">
                  <div class="col-auto">
                    <div class="avatar avatar-xl position-relative">
                      <img
                        src="../assets/img/team-2.jpg"
                        alt="profile_image"
                        class="w-100 border-radius-lg shadow-sm"
                      />
                    </div>
                  </div>
                  <div class="col-auto my-auto">
                    <div class="h-100">
                      <input type="file" class="text-xs mb-1" />
                      <p class="mb-0 text-xs">
                        Hanya gunakan gambar dengan format .jpg/.png
                      </p>
                    </div>
                  </div>
                </div>

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
                </div>

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
                  <div class="d-flex justify-content-end mt-4">
                    <a href="">
                      <button class="btn btn-primary btn-sm ms-auto">
                        Simpan Perubahan
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
  );
};

export default ViewProfil;
