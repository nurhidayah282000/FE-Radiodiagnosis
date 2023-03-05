import React from "react";

const VerifiedNo = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style={{ width: "30%" }}
        >
          <div class="modal-content">
            <div class="modal-body">
              <p class="ms-2 pt-0 mt-0 mb-0 font-weight-bold text-dark">
                Verifikasi Diagnosa
              </p>

              <p class="text-secondary text-xs ms-2 mt-2">
                Radiodiagnosis Sistem
              </p>
              <div class="row">
                <div class="col-3">
                  <p class="text-xs text-dark ps-2">Gigi #11</p>
                </div>
                <div class="col-4 ps-0">
                  <ul>
                    <li class="text-xs text-warning font-weight-bold">
                      Karies Gigi
                    </li>
                  </ul>
                </div>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0px",
                    color: "gray",
                    backgroundColor: "gray",
                    marginBottom: "2px",
                  }}
                />
              </div>
              <div class="row">
                <div class="col">
                  <p class="text-dark text-xs ms-2 mt-0">
                    Apakah hasil Diagnosa Sistem <br />
                    sudah sesuai?
                  </p>
                </div>
                <div class="col">
                  <div class="d-flex justify-content-end">
                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio3"
                      autocomplete="off"
                      checked
                    />
                    <label
                      class="btn btn-sm btn-outline-primary mt-0 mb-0 p-2 ps-3 pe-3 border-radius-xl"
                      for="btnradio3"
                    >
                      Ya
                    </label>

                    <input
                      type="radio"
                      class="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-sm btn-outline-primary mt-0 mb-0 p-2 border-radius-xl"
                      for="btnradio2"
                    >
                      Tidak
                    </label>
                  </div>
                </div>

                <p class="text-secondary text-xs ms-2 mt-0 mb-2">
                  Radiodiagnosis Verifikator
                </p>
                <select
                  class="form-select ms-3 mb-3 text-xs"
                  style={{ width: "92%" }}
                  id="exampleFormControlSelect1"
                  aria-placeholder="xsaas"
                >
                  <option>Karies</option>
                  <option>Lesi Periapikal</option>
                  <option>Impaksi</option>
                  <option>Resorbsi</option>
                  <option>dll</option>
                </select>

                <p class="text-secondary text-xs ms-2 mt-0 mb-2">Catatan</p>
                <textarea
                  class="form-control ms-3 text-xs"
                  style={{ width: "92%" }}
                  type="text"
                  placeholder="Masukkan catatan pasien"
                  value=""
                ></textarea>
              </div>

              <div class="ms-auto text-end mt-4">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm mb-0 p-1"
                  data-bs-dismiss="modal"
                >
                  Batalkan
                </button>
                <button class="btn btn-primary btn-sm mb-0 pe-2 ps-2 pt-1 pb-1">
                  Selesai
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedNo;
