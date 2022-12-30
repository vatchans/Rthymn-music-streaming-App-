import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Signup() {
    const onSubmit = (e) => {
        e.preventDefault();
        const d = {};
        Array.from(e.target.elements).forEach((element) => {
          if (element.nodeName === "INPUT") {
            d[element.name] = element.value;
          }
        });
        let res= toast.promise(axios.post("https://637db1519c2635df8f8c560f.mockapi.io/m",d),
        { 
            pending: 'Loading...',
            success: 'Sucessfully registered',
            error: 'Promise rejected'
          }
      ); console.log(res)
       
    }
    return <>
        <div id="loginbg" className='container-fluid'>
            <div className="signup-page">
                <h2 style={{ "text-align": "center" }}>Sign up</h2><br />
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" class="text-field" placeholder="Username" required id="username" />
                    <input type="email" name="email" className="text-field" placeholder="Email" required id="email" />
                    <input type="text" name="phno" id="phone" class="text-field" placeholder="Phone number" required />
                    <input type="password" name="password" id="password" className="text-field" required placeholder="  Password" /><br />
                    <button type="submit" id="login">Register</button><br>
                    </br>
                    <span>Already have an account.click</span><Link to="/"><a>&nbsp;here</a></Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    </>

}

export default Signup
