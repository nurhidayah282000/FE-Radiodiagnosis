import React from "react";
import ContactAlert from "../../../component/Alerts/ContactAlert";

const Kontak = () => {
  return (
    <div>
      <div class="card-body px-0 pb-2 mt-2">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-none border-0">
              <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                  <h6 class="mb-0 font-weight-bolder">Kontak</h6>
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
                        Email
                      </label>
                      <p
                        class="form-control"
                        type="text"
                        placeholder="Masukkan password baru"
                        value=""
                      >ramadhan@gmail.com</p>
                    </div>

                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Nomor Telepon
                      </label>
                      <p
                        class="form-control"
                        type="text"
                        placeholder="Masukkan password baru"
                        value=""
                      >08531799007655</p>
                    </div>
                    <div className="form-group">
                        <div
                          class=" text-center "
                       
                        >
                          <ContactAlert />
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
  );
};

export default Kontak
