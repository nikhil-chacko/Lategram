import React from "react";
import Logofull from "./Logofull";

function Form() {
    return (
        <div className="form-page">
            <div className="form-container">
                <form action="http://localhost:5000/api/users" method="POST">
                    <Logofull fontSize="70px"/>
                    <h4>Sign up to see photos and videos from your friends.</h4>
                    <hr />
                    <input type="email" name="email" placeholder="Enter Email" />
                    <input type="text" name="name" placeholder="First Name" />
                    {/* <input type="text" placeholder="Last Name" /> */}
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit" >Sign Up</button>
                    <p>By signing up, you agree to our <b>Terms, Data Policy</b>  and <b>Cookies Policy .</b> </p>
                </form>
            </div>
            <div className="alt-link">
                <p>Have an account? <a href="#">Login</a></p> 
            </div>
        </div>
    );
}

export default Form;