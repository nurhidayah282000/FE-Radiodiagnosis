import moment from "moment";
import React from "react";
import { baseURL } from "../../routes/Config";
import Paginations from "../Pagination/Paginations";

const HistoryCard = ({ data }) => {
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
                <p class="text-sm font-weight-bolder text-dark">Histori#1</p>
                <p class="text-xs text-secondary font-weight-bold">
                  Gambar Panoramik Gigi
                </p>
                <img
                  className=" img-fluid ps-0 pb-4"
                  // style={{borderBottomLeftRadius:"1rem" }}
                  src={`${baseURL + data.panoramik_picture}`}
                />

                <div class="row">
                  <div class="col-3">
                    <p class="text-xs text-secondary font-weight-bold">
                      Tanggal Upload 
                    </p>
                  </div>
                  <div class="col-4">
                    <p class="text-xs text-primary font-weight-bold">
                      {moment(data.panoramik_upload_date).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <p class="text-xs text-secondary font-weight-bold">
                      Radiografer 
                    </p>
                  </div>
                  <div class="col-4">
                    <p class="text-xs text-primary font-weight-bold">
                      {data.doctor_name ?? "-"}
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
                      {data.doctor_name ?? "-"}
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
