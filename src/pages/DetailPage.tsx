import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCompanies } from "../hooks/useCompanies";
import Preloader from "../components/Preloader";
import DetailCompanyInfo from "../components/DetailCompanyInfo";

const DetailPage = () => {
  const { companyId } = useParams();
  const { getDetailCompanyInfo, detailedCompanyInfo, isLoading } =
    useCompanies();

  useEffect(() => {
    getDetailCompanyInfo(companyId as string);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (detailedCompanyInfo) {
    return <DetailCompanyInfo detailedCompanyInfo={detailedCompanyInfo} />;
  }

  return <div>Cant find company with current Id, try again</div>;
};

export default DetailPage;
