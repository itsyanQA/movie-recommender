import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { moviesApi } from "./store/slices/movieApiSlice";

function App() {
  return (
    <ApiProvider api={moviesApi}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ApiProvider>
  );
}

export default App;
