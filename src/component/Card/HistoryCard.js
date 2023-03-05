import React from "react";

const HistoryCard = () => {
  return (
    <div>
      <div
        class="card shadow-none mt-2"
        style={{ backgroundColor: "ghostwhite" }}
      >
        <div class="row d-flex justify-content-center mt-4 mb-4">
          <div class="col-8">
            <div class="card shadow-none mt-4 me-2 ms-2">
              <div class="card-body">
                <p class="text-sm font-weight-bolder text-dark">
                  Histori#12342
                </p>
                <div class="row">
                  <div class="col-3">
                    <p class="text-xs text-secondary font-weight-bold">
                      Tanggal Periksa
                    </p>
                  </div>
                  <div class="col-4">
                    <p class="text-xs text-primary font-weight-bold">
                      23/04/2018
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p class="text-xs text-secondary font-weight-bold">
                      Dokter Verifikator
                    </p>
                  </div>
                  <div class="col-4">
                    <p class="text-xs text-primary font-weight-bold">
                      Drg. Ramadhan
                    </p>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <p class="text-xxs text-secondary font-weight-bold">
                      Radiodiagnosis Sistem
                    </p>
                    <div class="row">
                      <div class="col-2">
                        <ul class="ps-3">
                          <li class="text-xs">Gigi #11</li>
                        </ul>
                      </div>
                      <div class="col-10 ps-0">
                        <p class="text-xs text-dark font-weight-bold mb-0 pb-2">
                          Karies Gigi
                        </p>
                        <hr
                          style={{
                            height: "1px",
                            borderWidth: "0px",
                            color: "gray",
                            backgroundColor: "gray",
                            marginBottom: "0px",
                            marginTop: "0px",
                          }}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <ul class="ps-3">
                          <li class="text-xs">Gigi #22</li>
                        </ul>
                      </div>
                      <div class="col-4 ps-0">
                        <p class="text-xs text-dark font-weight-bold">
                          Lesi Periapikal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <p class="text-xxs text-secondary font-weight-bold">
                      Radiodiagnosis Verifikator
                    </p>
                    <div class="row">
                      <div class="col-2">
                        <ul class="ps-3">
                          <li class="text-xs">Gigi #11</li>
                        </ul>
                      </div>
                      <div class="col-10 ps-0">
                        <p class="text-xs text-dark font-weight-bold mb-0 pb-2">
                          Resorbsi
                        </p>
                        <hr
                          style={{
                            height: "1px",
                            borderWidth: "0px",
                            color: "gray",
                            backgroundColor: "gray",
                            marginBottom: "0px",
                            marginTop: "0px",
                          }}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <ul class="ps-3">
                          <li class="text-xs">Gigi #22</li>
                        </ul>
                      </div>
                      <div class="col-4 ps-0">
                        <p class="text-xs text-dark font-weight-bold">
                          Karies Gigi
                        </p>
                      </div>
                    </div>
                    <p class="text-xxs text-secondary font-weight-bold">
                      Interpretasi Manual
                    </p>
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

export default HistoryCard;
