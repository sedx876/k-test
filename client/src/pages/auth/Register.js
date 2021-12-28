import React, { useState, useEffect } from "react"
import { auth } from "../../firebase.js"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
//import { useNavigate } from "react-router-dom"


const Register = ({history}) => {
  const [email, setEmail] = useState("")
  const { user } = useSelector((state) => ({ ...state }))
  // let navigate = useNavigate()

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    }

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email has been sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  }

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <br/>

      <button type="submit" className="btn btn-raised btn-outline-success">
        Register
      </button>
    </form>
  )

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h4 className='text-primary'>Enter Email to Register</h4>
          
          {registerForm()}
          <br/>
          <h4 className='text-warning'>
            **Please Check Your Email to Confirm Registration.**
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Register