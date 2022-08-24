import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { Container, Toast, Header } from "./components";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Home" element={<HomePage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </main>
      <Toast />
    </Router>
  );
};

export default App;
