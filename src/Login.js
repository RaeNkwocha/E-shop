import React, { useRef, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./Authcontext";
import fruit from "./Splash/Group.png";
// import "./Login.css";

// import "bootstrap/dist/css/bootstrap.min.css"

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/shop");
    } catch {
      setError("failed to sign in");
    }
    setLoading(false);
  }
  return (
    <>
      <div
        style={{
          height: "150px",
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
      <h2 style={{ marginLeft: "30px" }}> Login in</h2>
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

      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="e-mail">
            {/* <TextField
              label="Email"
              style={{ width: "80vw", paddingBottom: "30px" }}
            >
              {" "}
             
            </TextField> */}
            <Form.Control
              style={{ width: "80vw", padding: "12px", marginLeft: "30px" }}
              type="e-mail"
              ref={emailRef}
              required
            />
          </Form.Group>
          <Form.Group id="Password">
            {/* <TextField
              label="password"
              style={{ width: "80vw", paddingBottom: "30px" }}
            >
              {" "}
            
            </TextField> */}
            <Form.Control
              style={{
                width: "80vw",
                marginTop: "30px",
                padding: "12px",
                marginLeft: "30px",
              }}
              type="password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group id="password-confirmed"></Form.Group>

          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                background: "#53B175",
                border: "none",
                padding: "15px",
                width: "400px",
                borderRadius: "15px",
                marginTop: "8px",
                color: "white",
                fontSize: "20px",
              }}
            >
              Login
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
        <Link to="/signup">signUp</Link>
      </div>
    </>
  );
}

export default Login;
