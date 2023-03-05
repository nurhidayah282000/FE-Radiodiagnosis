import React from "react";

const DeleteModal = () => {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-start">
              <img
                src="../assets/img/App/delete.png"
                class="navbar-brand-img h-100"
                alt=""
              />
              <p class="ms-5 pt-0 mt-0 mb-0 font-weight-bold">
                Anda akan menghapus
                <br />
                Data ini.
              </p>

              <p class="text-secondary text-sm ms-5">
                Apakah anda yakin akan menghapus data ini? <br />
                Data yang telah dihapus tidak akan dikembalikan lagi.
              </p>
              <div class="ms-auto text-end">
                <button
                  type="button"
                  class="btn btn-danger btn-sm px-3 mb-0"
                  data-bs-dismiss="modal"
                >
                  Hapus Data
                </button>&nbsp;
                <button class="btn btn-outline-secondary btn-sm text-dark px-3 mb-0">
                  Batalkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
