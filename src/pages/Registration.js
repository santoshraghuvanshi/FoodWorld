import React from "react";
import Layout from "../components/Layout/Layout";
function Login() {
    return (
        <Layout>
            <div className="d-flex justify-content-center align-items-center vg-primary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email">E Mail</label>
                            <input type="email" placeholder="Enter Mail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" />
                        </div>
                        <button className="btn-btn-success">Login</button>
                        <p>You are agree to our terms and policies</p>
                        <button className="btn-btn-default border">Create Account</button>
                    </form>
                </div>

            </div>
        </Layout>

    )
}
export default Login