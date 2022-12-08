import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginService from "../services/LoginService";
import NavBar from './NavBar';
import Modal from '@mui/material/Modal';
import { Typography } from "@mui/material";
import { ReactSession } from 'react-client-session'

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const navigate = useNavigate();

  const [Email, setEmail] = useState();
  const [passwd, setPassword] = useState("");
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


  const [fullname, setFullName] = useState();
  const [useremail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [displayAlert, setDisplay] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let user = {
    username: "",
    email: ""
  }



  const handleSignUp = async event => {
    event.preventDefault();

    async function addUserInfo() {

      console.log(fullname);

      const addData = await LoginService.addUserData(fullname, useremail, userPassword);
    }


    addUserInfo();
    setDisplay(true);

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
    console.log("userData: ", userData, userData.length)

    // userData.map(rows => {
    //   setRecords({
    //     username: "",
    //     password: "",
    //     Email: ""
    //   })
    // })

    if (userData.length === 0) {

      alert("User not found.Please enter correct email id.")
    }
    else {
      const fetchedPassword = userData[0]["password"];
      const name = userData[0]["username"];
      const emailId = userData[0]["Email"];
      console.log("fetchedPassword: ", userData[0])
      if (fetchedPassword === passwd) {
        user = {
          username: { name },
          email: { emailId }
        }
        ReactSession.set("user", user)
        navigate('/home');
      }

      else
        alert("Password does not match.");
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
                    onChange={event => setPassword(event.target.value)}
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
          <form className="Auth-form" onSubmit={handleSignUp}>
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
                  type="name"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                  onChange={event => setFullName(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  onChange={event => setUserEmail(event.target.value)}

                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={event => setUserPassword(event.target.value)}

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
