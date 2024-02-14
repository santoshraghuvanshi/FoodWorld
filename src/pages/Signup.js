import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from 'react-router-dom'
import { Button } from "bootstrap";
function Signup() {
    return (
        <Layout>
           <div style={{backgroundColor: "powderblue"}} className="d-flex justify-content-center align-items-center vg-primary vh-100">
                <div className="bg-white p-3 rounded w-25">
                <h3>Sign-Up</h3>
                    <form>
                    <div className="mb-3">
                            <label htmlFor="text"><strong>Name</strong></label>
                            <input type="email" placeholder="Enter Name" className="form-control rounded-0" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email"><strong>E Mail</strong></label>
                            <input type="email" placeholder="Enter Mail" className="form-control rounded-0" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" placeholder="Enter Password" className="form-control rounded-0" />
                        </div>
                        <button className="btn btn-success w-100 rounded-0"><strong>Sign up</strong></button>
                        <p>You are agree to our terms and policies</p>
                        <Link to={"/Login"} className="btn-btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                    </form>
                </div>

            </div>
        </Layout>

    )
}
export default Signup