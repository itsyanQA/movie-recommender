import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { moviesApi } from "./store/slices/movieApiSlice";
import { theme } from "./style/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Header } from "./components/Header/Header";
import { Upcoming } from "./pages/HomePage/Upcoming";
import { RouterPaths } from "./models/enums/RouterPaths";

function App() {
  return (
    <ApiProvider api={moviesApi}>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path={RouterPaths.HOME_PAGE} element={<HomePage />} />
          <Route path={RouterPaths.UPCOMING} element={<Upcoming />} />
        </Routes>
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
