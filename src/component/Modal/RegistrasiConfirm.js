import React from "react";

const RegistrasiConfirm = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img
                src="../assets/img/App/verification.png"
                className="w-10 h-1"
              ></img>
              <p className="pt-0 mt-4 mb-0 font-weight-bold text center">
                Registrasi Akun Berhasil
              </p>
              <p className="text-secondary text-sm ">password: vagbsiuxgaiui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrasiConfirm;
