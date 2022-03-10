import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, ProtectedRoute, Navlink } from "../components/index";
import { UserAuthContextProvider } from "../context/UserAuthContext";

export const Routeslink = () => {
  return (
    <div>
    <Navlink />
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
