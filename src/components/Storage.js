import React from "react";
import { Container } from "react-bootstrap";
import "./Storage.css";

export default function Storage() {
  return (
    <>
      <div className="img" style={{ width: "full", height: "full" }}>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <a
              href="https://pixelfed.de/register"
              className="d-flex btn btn-lg btn-primary align-items-center justify-content-center"
              style={{ height: "100px", width: "600px" }}
            >
              <p style={{ color: "white", fontSize: "30px" }}>Upload Image</p>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
