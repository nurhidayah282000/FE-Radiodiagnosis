import React from "react";

const InterpretasiManual = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal3"
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
                Interpretasi Manual
              </p>

              <div class="row mt-2">
                <div class="col-3">
                  <p class="text-secondary text-xs ms-2 mt-0 mb-2">No.Gigi</p>
                  <select
                    class="form-select ms-2 mb-3 text-xs"
                    style={{ width: "92%" }}
                    id="exampleFormControlSelect1"
                  >
                    <option>55</option>
                    <option>54</option>
                    <option>53</option>
                    <option>52</option>
                    <option>51</option>
                  </select>
                </div>
                <div class="col-9">
                  <p class="text-secondary text-xs ms-2 mt-0 mb-2">
                    Tulis Diagnosa
                  </p>
                  <input
                    class="ms-2 mb-3 text-xs form-control"
                    style={{ width: "92%" }}
                    placeholder="tulis nama penyakit"
                  />
                </div>
              </div>

              <div class="ms-auto text-end mt-4">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm mb-0 p-1"
                  data-bs-dismiss="modal"
                >
                  Batalkan
                </button> &nbsp;
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

export default InterpretasiManual;
