import React from "react";
import { Grid } from "@mui/material";
import { useCompanies } from "../hooks/useCompanies";
import Preloader from "./Preloader";
import { shortCompanyDescription } from "../types/types";
import CompanyItem from "./CompanyItem";

const CompaniesCards = () => {
  const { isLoading, companiesArr } = useCompanies();
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <Grid container spacing={8}>
      {companiesArr.length > 0
        ? companiesArr.map(
            (companyInfo: shortCompanyDescription, index: number) => {
              return (
                <Grid item xs={4} key={index}>
                  <CompanyItem companyInfo={companyInfo} />
                </Grid>
              );
            }
          )
        : null}
    </Grid>
  );
};

export default CompaniesCards;
