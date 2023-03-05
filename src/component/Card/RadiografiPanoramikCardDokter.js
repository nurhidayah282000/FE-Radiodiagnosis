import React from "react";
import Verified from "../Alerts/Verified";

const RadiografiPanoramikCardDokter = () => {
  return (
    <div>
      <div class="row p-3 ">
        {/* <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4"> */}
        <div class="card p-3 mb-4 border-1">
          <div class="align-middle text-start text-sm ps-2">
            <span class="badge border-radius-xl text-dark badge-sm bg-gradient-faded-primary-vertical">
              Kode RM <span>001</span>
            </span>
          </div>
          <img
            class=" border-radius-xl p-2"
            src="../assets/img/App/panoramik.jpg"
          />
          <div class="card-body p-2">
            <p class="text-sm text-dark font-weight-bolder mb-1">Nurhidayah</p>
            <div class="d-flex flex-column">
              <span class="mb-2 text-xs text-secondary">
                Tgl Upload Gambar
                <span class="text-primary text-xs ms-sm-4">23/04/2018</span>
              </span>
            </div>
            <div class="d-flex flex-column">
              <span class="mb-2 text-xs text-secondary">
                Dokter Verifikator
                <span class="text-primary text-xs ms-4 ps-2">
                  Drg. Ramadhan Putra
                </span>
              </span>
            </div>
            <p class="text-xs text-secondary mt-4">Radiodiagnosis Sistem</p>
            <div class="d-flex flex-column">
              <div class="row">
                <div class="col-4">
                  <ul class="ps-3">
                    <li class="text-sm">Gigi #11</li>
                  </ul>
                </div>
                <div class="col-8 ps-0">
                  <p class="text-sm text-dark font-weight-bolder">
                    Karies Gigi
                  </p>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-6 pe-0">
                <Verified />
              </div>

              <div class="col-4 pe-0 text-end">
                <a href="/dokter-view-gambar-panoramik">
                  <button
                    type="button"
                    class="text-dark btn btn-outline-secondary btn-sm p-1 px-2 opacity-5 mb-0"
                  >
                    Lihat Detail
                  </button>{" "}
                </a>
              </div>
              <div class="col-2 ps-0">
                <button class="btn btn-outline-secondary btn-sm px-3 py-1 text-dark opacity-5 mb-0">
                  <i class="fa fa-ellipsis-v text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiografiPanoramikCardDokter;
