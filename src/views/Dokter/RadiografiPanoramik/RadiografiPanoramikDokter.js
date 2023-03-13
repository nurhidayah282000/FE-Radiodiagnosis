import { React, useState, useEffect } from "react";
import HeaderUser from "../../../component/Header/HeaderUser";
import SidebarDokter from "../../../component/Sidebar/SidebarDokter";
import RadiografiPanoramikCardDokter from "../../../component/Card/RadiografiPanoramikCardDokter";
import axios from "axios";
import { baseURL } from "../../../routes/Config";

const RadiografiPanoramikDokter = () => {
  const [data, setData] = useState([]);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/radiographics/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === "fail") {
          setData([]);
        } else {
          setData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <body className="g-sidenav-show bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <aside
          className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-0 my-0 fixed-start ms-0"
          id="sidenav-main"
        >
          <SidebarDokter />
        </aside>
        <main className="main-content position-relative border-radius-lg">
          <HeaderUser />
          <div className="container-fluid py-2">
            <div className="row mb-4">
              <div className="col-12">
                <div className="card mb-4">
                  <div className="card-header p-1">
                    <div className="row p-2">
                      <div className="col card-header p-4 pt-3">
                        <h6 className="font-weight-bolder">
                          Radiografi Panoramik
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          Hasil diagnosa pada tabel di bawah merupakan hasil
                          diagnosa
                          <br />
                          sementara yang perlu diverifikasi oleh dokter
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2">
                    <div className="row">
                      <di className="col-md-2">
                        <p className="btn btn-link m-0 ps-0  text-secondary text-xs font-weight-bold">
                          Semua Hasil
                        </p>
                      </di>
                      <di className="col-md-2">
                        <p className="ps-0 btn btn-link m-0 text-secondary text-xs font-weight-bold">
                          Telah Diverifikasi
                        </p>
                      </di>
                      <di className="col-md-2">
                        <p className="btn btn-link m-0 ps-0  text-secondary text-xs font-weight-bold">
                          Belum Diverifikasi
                        </p>
                      </di>
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
                  {/* <!-- </card> --> */}
                  <div className="row p-3 ">
                    {data.map((item) => (
                      <div
                        key={item.radiographics_id}
                        className="col-xl-4 col-sm-6 mb-xl-0 mb-4"
                      >
                        <RadiografiPanoramikCardDokter
                          data={item}
                          baseURL={baseURL}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default RadiografiPanoramikDokter;
