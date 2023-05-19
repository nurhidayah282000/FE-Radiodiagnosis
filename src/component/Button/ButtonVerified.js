import React from "react";

const ButtonVerified = () => {
  return (
    <div>
      <a
        className="btn btn-sm btn pe-0 ps-0 btn-success w-50 shadow-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          src="../assets/img/App/verification.png"
          className="w-10 h-1"
        ></img>
        &nbsp;&nbsp;Verifikasi Diagnosa
      </a>
    </div>
  );
};

export default ButtonVerified;
