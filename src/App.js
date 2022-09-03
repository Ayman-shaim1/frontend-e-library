import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  BooksPage,
  BookPage,
  BookPageContentPage,
} from "./pages";
import { Container, Toast, Header, Footer, Alert, Dialog } from "./components";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='my-2'>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/Home' element={<HomePage />} />
            <Route exact path='/Login' element={<LoginPage />} />
            <Route exact path='/Register' element={<RegisterPage />} />
            <Route exact path='/Books' element={<BooksPage />} />
            <Route exact path='/Book/:id' element={<BookPage />} />
            <Route
              exact
              path='/Book/:id/pages/:page'
              element={<BookPageContentPage />}
            />
          </Routes>
        </Container>
      </main>
      <Toast />
      <Alert />
      <Dialog />
      <Footer />
    </Router>
  );
};

export default App;
