import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Login, MovieList, Registration, Movie, Favorites } from "ui/pages";
import { Modal } from "ui/common";
import { checkAuth } from "core/utils";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkAuth()) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Modal />
    </>
  );
}

export default App;
