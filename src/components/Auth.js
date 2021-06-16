import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Auth(props) {
  console.log("User Details Auth: ", props.user);

  const containerStyle = {
    width: "80%",
    textAlign: "center",
    marginTop: "10vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    boxShadow: "0 10px 50px -2px rgb(0 0 0 / 14%)",
  };

  return (
    <div>
      <div className="container py-5 text-center">
        <div style={containerStyle}>
          <h1>Join Us</h1>
          <div>
            <p className="text-secondary">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <strong>
              Search doctors according to your speciality choices.
            </strong>
          </div>
          <div>
            <Link to="/home">
              <a className="btn btn-success my-4" style={{ color: "white" }}>
                View Doctors
              </a>
            </Link>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="my-3 mx-3"
            block
            style={{ width: "85%" }}
            onClick={props.handleLogin}
          >
            <i class="fab fa-google"> Join with Gmail </i>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Auth;
