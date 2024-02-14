import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from 'react-router-dom'
import validation from "./LoginValidation";
function Login() {
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const handleInput = (event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
    }
    const [errors, setError] = useState({})
    const handleSubmit = (event)=>{
        event.preventDefault();
        setError(validation(values));
    }
    return (
        <Layout>
            <div style={{backgroundColor: "powderblue"}} className="d-flex justify-content-center align-items-center vg-primary vh-100">
                <div className="bg-white p-3 rounded w-25">
                <h3>Sign-In</h3>
                    <form onClick={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email"><strong>E Mail</strong></label>
                            <input type="email" placeholder="Enter Mail" name="email" onChange={handleInput} className="form-control rounded-0" />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} className="form-control rounded-0" />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Login</strong></button>
                        <p>You are agree to our terms and policies</p>
                        <Link to={"/Signup"} className="btn-btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                    </form>
                </div>

            </div>
        </Layout>

    )
}
export default Login