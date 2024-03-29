import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/detailed/:companyId" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
