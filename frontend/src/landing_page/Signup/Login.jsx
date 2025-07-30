import React from "react";

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="border rounded p-4 shadow bg-white" style={{ width: "100%", maxWidth: "700px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>

                <p className="mt-3 text-center text-muted" style={{ fontSize: "14px" }}>
                    Don’t have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
