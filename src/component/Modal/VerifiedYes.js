import React from "react";
import VerifiedNo from "./VerifiedNo";

const VerifiedYes = () => {
  return (
    <div>
      <VerifiedNo />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ width: "30%" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <p className="ms-2 pt-0 mt-0 mb-0 font-weight-bold text-dark text-start">
                Verifikasi Diagnosa
              </p>

              <p className="text-secondary text-xs ms-2 mt-2 text-start">
                Radiodiagnosis Sistem
              </p>
              <div className="row">
                <div className="col-3 text-start">
                  <p className="text-xs text-dark ps-2">Gigi #11</p>
                </div>
                <div className="col-4 text-start ps-0">
                  <ul>
                    <li className="text-xs text-warning font-weight-bold">
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
              <div className="row">
                <div className="col">
                  <p className="text-dark text-start text-xs ms-2 mt-0">
                    Apakah hasil Diagnosa Sistem <br />
                    sudah sesuai?
                  </p>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-end">
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label
                      className="btn btn-sm btn-outline-primary mt-0 mb-0 p-2 ps-3 pe-3 border-radius-xl"
                      htmlFor="btnradio1"
                    >
                      Ya
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-sm btn-outline-primary mt-0 mb-0 p-2 border-radius-xl"
                      htmlFor="btnradio2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Tidak
                    </label>
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

              <div className="ms-auto text-end mt-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm mb-0 p-1"
                  data-bs-dismiss="modal"
                >
                  Batalkan
                </button>
                &nbsp;
                <button className="btn btn-primary btn-sm mb-0 pe-2 ps-2 pt-1 pb-1">
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
