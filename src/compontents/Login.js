import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Login() {
  let [data, setData] = useState([])
  let navigate = useNavigate()
  let getData = async () => {
    try {
      let res = await axios.get('https://637db1519c2635df8f8c560f.mockapi.io/m')
      if (res.status === 200) {
        setData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const d = {};
    Array.from(e.target.elements).forEach((element) => {
      if (element.nodeName === "INPUT") {
        d[element.name] = element.value;
      }
    });
    getData()


    for (var i = 0; i < data.length; i++) {
      if (d.email === data[i].email && d.password === data[i].password) {
        console.log("Success")
        navigate('/Songs')
        return
      }
    }
    console.log("Incorrect Password or Email id")
    toast.error("Incorrect Password or Email id", {
      theme: "dark"
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return <>
    <div id="loginbg" className='container-fluid'>
    <div className="login-page">
        <h2 style={{"text-align":"center"}}>Sign in</h2><br/>
         <form onSubmit={onSubmit}>
         <input type="email" name="email" className="text-field" placeholder="Email"   required id="email"/>
          <input type="password" name="password" id="password" className="text-field"   required placeholder="  Password"/><br/>
          <button type="submit" id="login">Login</button><br>
          </br>
          <span>Don't have an account.Resigster</span><Link to="/signup"><a>&nbsp;here</a></Link>
          </form>
     </div>
     <ToastContainer />
     </div>
    </> 
}

export default Login