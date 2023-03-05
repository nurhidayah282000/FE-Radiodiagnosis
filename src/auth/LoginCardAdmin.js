import React from "react";

const LoginCardAdmin = () => {
  return (
    <div>
      <main class="main-content mt-0">
        <section>
          <div class="page-header min-vh-100">
            <div class="container">
              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div class="card card-plain">
                    <div class="card-header pb-0 text-start">
                      <h4 class="font-weight-bolder">Sign In</h4>
                      <p class="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div class="card-body">
                      <form role="form">
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control form-control-lg"
                            placeholder="Email"
                            aria-label="Email"
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control form-control-lg"
                            placeholder="Password"
                            aria-label="Password"
                          />
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <div class="text-center">
                          <a
                            class="nav-link me-2"
                            href="/data-user"
                          >
                            <button
                              type="button"
                              class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                            >
                              Sign in
                            </button>
                          </a>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href="\register-admin"
                          class="text-primary text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div
                    class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                    style={{backgroundImage: 'url("https://img.freepik.com/free-photo/dentist-examines-x-ray-photo-teeths_140725-7693.jpg?w=740&t=st=1670307721~exp=1670308321~hmac=3b378673b0e2caaadd61a1c0860e3e0370a5f2e2beb552d489c0b274f6dd1421")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                    
                  >
                    <span class="mask bg-gradient-primary opacity-5"></span>
                    <h4 class="mt-5 text-white font-weight-bolder position-relative">
                      "PENS - UA Radiodiagnostic Report"
                    </h4>
                    <p class="text-white position-relative">
                      sistem informasi radiodiagnosis yang terintegrasi dengan
                      sistem deteksi otomatis kelainan gigi dan jaringan
                      penyangga dalam pembacaan skrining radiografi panoramik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginCardAdmin
