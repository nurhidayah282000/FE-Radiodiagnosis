import React from "react";

const UbahPassword = () => {
  return (
    <div>
      <div class="card-body px-0 pb-2 mt-2">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-none border-0">
            <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0 font-weight-bolder">Ubah Password</h6>
                </div>
              </div>
              <div class="card-body pt-2">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Password Lama
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Masukkan password lama"
                        value=""
                      />
                    </div>

                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Password Baru
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Masukkan password baru"
                        value=""
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Konfirmasi password baru
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Masukkan kembali password baru"
                        value=""
                      />
                    </div>
                  </div>
                </div>

                <button
                  class="btn btn-primary btn-sm mt-4"
                  style={{ width: "100%" }}
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahPassword;
