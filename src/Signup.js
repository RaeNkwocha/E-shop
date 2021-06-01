import { TextField } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./Authcontext";
import fruit from "./Splash/Group.png";

// import "bootstrap/dist/css/bootstrap.min.css"

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("password does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/shop");
    } catch {
      setError("failed to create an Account");
    }
    setLoading(false);
  }
  return (
    <>
      <div
        style={{
          height: "150px",
          background: "#FCFCFC99 ",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center",
            paddingTop: "10vh",
          }}
        >
          <img src={fruit} alt=""></img>
        </div>
      </div>

      <h2 style={{ marginLeft: "30px" }}> Sign up</h2>
      {error && <Alert variant="danger"> {error} </Alert>}
      <h6
        style={{
          fontSize: "10px",
          marginLeft: "30px",
          color: "#7C7C7C",
          lineHeight: "15px",
          letterSpacing: "0.7px",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Enter your credentials to continue
      </h6>
      <div style={{ marginLeft: "30px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="e-mail">
            <TextField
              id="e-mail"
              type="e-mail"
              label="Email"
              required
              ref={emailRef}
              style={{ width: "80vw", paddingBottom: "30px" }}
            />
          </Form.Group>

          <Form.Group id="Password">
            <TextField
              id="Password"
              type="password"
              label="password"
              ref={passwordRef}
              required
              style={{ width: "80vw", paddingBottom: "30px" }}
            />
          </Form.Group>
          <div
            style={{
              //   marginTop: "7px",
              //   marginBottom: "5px",
              width: "100vw",
            }}
          ></div>
          <Form.Group id="password-confirmed">
            <TextField
              id="standard-basic"
              type="password"
              label="password confirmation"
              required
              ref={passwordConfirmationRef}
              style={{ width: "80vw", paddingBottom: "15px" }}
            />
          </Form.Group>
          <div>
            <div style={{ marginLeft: "30px", fontSize: "0.7rem" }}>
              By continuing you agree to our{" "}
              <span
                style={{
                  color: "green",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                Terms of Service{" "}
              </span>
              and{" "}
              <span
                style={{
                  color: "green",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                Privacy Privacy
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <button
              disabled={loading}
              style={{
                background: "#53B175",
                border: "none",
                padding: "15px",
                width: "400px",
                borderRadius: "15px",
                marginTop: "25px",
                color: "white",
                fontSize: "20px",
              }}
            >
              Sign up
            </button>
          </div>
        </Form>
      </div>

      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <strong> Already Have an account?</strong>
        <Link to="/login">Log in</Link>
      </div>
    </>
  );
}

export default Signup;
