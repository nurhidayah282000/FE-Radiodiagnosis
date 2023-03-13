import React from "react";
import VerifiedNo from "./VerifiedNo";

const VerifiedYes = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
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
                    marginBottom: "2",
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
                      id="btnradio1"
                      autocomplete="off"
                      checked
                    />
                    <label
                      class="btn btn-sm btn-outline-primary mt-0 mb-0 p-2 ps-3 pe-3 border-radius-xl"
                      for="btnradio1"
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
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Tidak
                    </label>
                    {/* <VerifiedNo /> */}
                  </div>
                </div>
                <hr
                  style={{
                    height: "1px",
                    borderWidth: "0px",
                    color: "gray",
                    backgroundColor: "gray",
                    marginBottom: "2",
                  }}
                />
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

export default VerifiedYes;
