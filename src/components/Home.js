import React, { useEffect, useState } from "react";
import { Link, NavLink, Redirect, withRouter } from "react-router-dom";

import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import Doctor from "./Doctor.json";

function Home(props) {
  const btnStyle = {
    borderRadius: "20px",
    paddingTop: 0,
    paddingBottom: 0,
  };
  const imgStyle = {
    width: "20vh",
    height: "20vh",
    borderRadius: "100%",
    marginTop: "3vh",
    marginBottom: "3vh",
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div style={{ paddingBottom: "10vh" }}>
      <div className="container">
        <h3 className="text-center mt-5">
          Welcome{" "}
          <span className="text-primary">
            {localStorage.getItem("userName")}
          </span>
        </h3>
        <h3 className="text-center mt-5">
          Find doctors according to your{" "}
          <span className="text-danger">choices</span>
        </h3>
        <InputGroup className="mb-3 my-5">
          <FormControl
            placeholder="Search by name , speciality , hospital name"
            onChange={(event) => setSearchQuery(event.target.value)}
            value={searchQuery}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Button className="btn btn-danger" onClick={props.handleLogout}>
          LogOut
        </Button>
      </div>
      <div className="container mt-5">
        <div className="row">
          {Doctor.network
            .filter((val) => {
              if (searchQuery == " ") {
                return val;
              } else if (
                val.username
                  .toLowerCase()
                  .includes(searchQuery.toString().toLowerCase()) ||
                val.speciality
                  .toLowerCase()
                  .includes(searchQuery.toString().toLowerCase()) ||
                val.work
                  .toLowerCase()
                  .includes(searchQuery.toString().toLowerCase())
              ) {
                return val;
              }
            })
            .map((row) => (
              <div className="col-lg-3 mt-4">
                <Card
                  style={{
                    boxShadow: "0 10px 50px -2px rgb(0 0 0 / 14%)",
                    borderRadius: "20px",
                  }}
                >
                  <div className="text-center bg-primary">
                    <Card.Img variant="top" src={row.img} style={imgStyle} />
                  </div>
                  <Card.Body>
                    <Card.Title>{row.username}</Card.Title>
                    <Card.Text className="text-danger">
                      {row.speciality}
                    </Card.Text>
                    <Card.Text style={{ marginTop: "-15px" }}>
                      {row.work}
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "space-between",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button variant="outline-primary " style={btnStyle}>
                        Profile
                      </Button>
                      <Button variant="outline-success " style={btnStyle}>
                        Appointment
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
