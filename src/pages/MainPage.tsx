import React from "react";
import InputSearchItem from "../components/InputSearchItem";
import CompaniesCards from "../components/CompaniesCards";

const MainPage = () => {
  return (
    <div className="appContainer">
      <InputSearchItem />
      <CompaniesCards />
    </div>
  );
};

export default MainPage;
