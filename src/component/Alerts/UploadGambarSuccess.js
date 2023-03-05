import React from "react";

const UploadGambarSuccess = () => {
  return (
    <div>
      <div
        class="alert alert-success text-sm p-2 alert-dismissible fade show mt-4"
        role="alert"
      >
        <i class="fa fa-check-circle-o" aria-hidden="true">
          {" "} {" "}
          Gambar berhasil diunggah.
        </i>
      </div>
    </div>
  );
};

export default UploadGambarSuccess;
