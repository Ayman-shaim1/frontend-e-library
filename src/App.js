import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  BooksPage,
  BookPage,
  BookPageContentPage,
  ProfilePage,
  SettingsPage,
} from "./pages";
import {
  Container,
  Toast,
  Header,
  Footer,
  Alert,
  Dialog,
  GlobalLoading,
} from "./components";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="my-2">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Home" element={<HomePage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Register" element={<RegisterPage />} />
            <Route exact path="/Books" element={<BooksPage />} />
            <Route exact path="/Book/:id" element={<BookPage />} />
            <Route
              exact
              path="/Book/:id/pages/:page"
              element={<BookPageContentPage />}
            />
            <Route exact path="/Profile" element={<ProfilePage />} />
            <Route exact path="/Settings" element={<SettingsPage />} />
          </Routes>
        </Container>
      </main>
      <Toast />
      <Alert />
      <Dialog />
      <GlobalLoading />
      <Footer />
    </Router>
  );
};

export default App;
