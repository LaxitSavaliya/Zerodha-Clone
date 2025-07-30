import React from "react";

function SignUp() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border rounded-4 p-4 shadow-lg bg-white w-100" style={{ maxWidth: "800px" }}>
        <div className="text-center mb-3">
          <img src="/media/images/logo.svg" alt="Zerodha Logo" style={{ width: 60 }} className="mb-2" />
          <h2 className="mb-1 fw-bold" style={{ letterSpacing: "1px" }}>Sign Up</h2>
          <p className="text-muted" style={{ fontSize: "15px" }}>Create your Zerodha account</p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" autoComplete="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" autoComplete="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" autoComplete="new-password" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" autoComplete="new-password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">Create Account</button>
        </form>
        <p className="mt-3 text-center text-muted" style={{ fontSize: "14px" }}>
          Already have an account? <a href="/login" className="text-primary text-decoration-none">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
