import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const { signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }


    const processLogin = e => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {
                setError(error.message)
            });
        e.preventDefault();

    }


    return (
        <div className="mt-5 pt-5">
            <h2>Please Login</h2>

            <div className="text-start px-3 container">




                <form onSubmit={processLogin} className="row g-3 mb-3 mt-5">

                    {/* email address */}
                    <div className="w-50 container">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                        </div>
                    </div>
                    <br />
                    {/* password */}
                    <div className="w-50">
                        <label htmlFor="inputPassword2" className="form-label">Password</label>
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword2" placeholder="Password" required />
                    </div>

                    {/* Submit button */}

                    <div className="col-auto mt-3">
                        <button type="submit" className="btn btn-primary mb-3">Login</button>
                    </div>
                    {/* error message */}

                    <div className="row mt-2 text-danger">{error}</div>


                </form>


            </div>

            <h5 className="my-3">New Here? <Link style={{ color: "blue", textDecoration: "underline" }} to="/register">Register Here</Link> </h5>


            <div>-------------------------</div>

            <br /><br /><br />
            <p>OR</p>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;
