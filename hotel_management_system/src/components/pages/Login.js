import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import ViewDashboard from "../ViewDashboard";
const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const submitloginform = () => {
    // if
    console.log("setlogin true");
    setIsLoggedin(true);
  };
  return (
    <>
      <div className="form-page">
        <div className="form-container">
          <div className="form-content-left">
            <img
              className="form-img"
              src={process.env.PUBLIC_URL + "/images/hero-img.jpg"}
              alt="spaceship"
            />
          </div>
          {!isLoggedin ? (
            <LoginForm submitForm={submitloginform} />
          ) : (
            <ViewDashboard />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
