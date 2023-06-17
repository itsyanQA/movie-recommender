import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { moviesApi } from "./store/slices/movieApiSlice";
import { theme } from "./style/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ApiProvider api={moviesApi}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
