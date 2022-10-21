import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, MovieList, Registration, Movie, Favorites } from "ui/pages";
import { Modal, ProtectedRoute } from "ui/common";
import { checkAuth } from "core/utils";
import { useAppSelector } from "./core/hooks";

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuth={checkAuth()}>
              <MovieList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute isAuth={checkAuth()}>
              <Movie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isAuth={checkAuth()}>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Modal />
    </>
  );
}

export default App;
