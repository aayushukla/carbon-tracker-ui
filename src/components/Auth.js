import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";
import NavBar from './NavBar';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate();

  const [Email, setEmail] = useState();
  const [records, setRecords] = useState(

    {
      username: "",
      password: "",
      Email: ""
    });

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
    console.log('authmod', authMode);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    // const email = Email['Email']
    // if(email == "")

    console.log("In handleclicked");
    await getUserData({
      Email
    });

  }
  async function getUserData(Email) {
    console.log("inside getuserdata");
    console.log(Email['Email'])
    const userData = await LoginService.getUserByID(Email['Email']);

    // userData.map(rows => {
    //   setRecords({
    //     username: "",
    //     password: "",
    //     Email: ""
    //   })
    // })


    if (userData == 0) {
      alert("User not found")
      console.log("user not found")
    }
    else {
      navigate('/home');
    }

  }

  if (authMode === "signin") {
    return (
      <>
        <div>
          <NavBar />
          <div className="Auth-form-container">

            <form className="Auth-form" onSubmit={handleSubmit}>

              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <Button variant="primary" type="submit"
                    style={{ fontSize: "15px", marginLeft: '10px', marginBottom: '2px', backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                    Sign In
                  </Button>
                  {/* <button type="submit" className="btn btn-primary">
                    Sign In
                  </button> */}
                </div>
                <p className="text-center mt-2">
                  <a href="#">Forgot password?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }

  if (authMode === "signup") {
    return (
      <div>
        <NavBar />
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary" type="submit"
                  style={{ fontSize: "15px", marginLeft: '10px', marginBottom: '2px', backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}>
                  Sign Up
                </Button>
                {/* <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button> */}
              </div>
              {/* <p className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </p> */}
            </div>
          </form>
        </div>
      </div>
    )
  }
}