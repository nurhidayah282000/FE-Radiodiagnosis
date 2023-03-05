import React from "react";

const RegisterCardAdmin = () => {
  return (
    <div>
      <main class="main-content mt-0">
        <div
          class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/revealing-shot-empty-orthodontic-office_482257-2313.jpg?w=740&t=st=1670308207~exp=1670308807~hmac=a2772a927c8a19203ba1eb1ae2d6e9cc2c570bbd8da17e46329a60000b8d71dd")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <span class="mask bg-gradient-primary opacity-1"></span>
          <div class="container">
            <div class="row justify-content-center">
              {/* <!-- <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-0 mt-5">Welcome!</h1>
            <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
          </div> --> */}
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row mt-lg-n10 mt-md-n0 mt-n10 justify-content-center">
            <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div class="card z-index-0">
                <div class="card-header text-center pt-4">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        aria-label="Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
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
                      <a class="nav-link me-2" href="/">
                        <button
                          type="button"
                          class="btn btn-primary w-100 my-4 mb-2"
                        >
                          Sign up
                        </button>
                      </a>
                    </div>
                    <p class="text-sm mt-3 mb-0">
                      Already have an account?
                      <a
                        href="/"
                        class="text-primary text-gradient font-weight-bolder"
                      >
                        Sign in
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterCardAdmin
