import React from "react";
import { detailCompanyDescription } from "../types/types";

type props_T = {
  detailedCompanyInfo: detailCompanyDescription;
};

const DetailCompanyInfo = ({ detailedCompanyInfo }: props_T) => {
  console.log(detailedCompanyInfo);
  return (
    <div className="detailCompanyContainer">
      <h1 className="detailCompanyName">{detailedCompanyInfo.name}</h1>
      <div className="detailHeaderContent">
        <div className="shortDescription">{detailedCompanyInfo.shortDesc}</div>
        <div>
          {detailedCompanyInfo.country},{detailedCompanyInfo.city}, since {""}
          {detailedCompanyInfo.founded}
        </div>
      </div>
      <div className="cleanDescription">{detailedCompanyInfo.cleanDesc}</div>
      <div className="additionalInfo">
        <div>
          <strong> Empoyers:</strong> {detailedCompanyInfo.nEmployeesMin} -{" "}
          {detailedCompanyInfo.nEmployeesMax}
        </div>

        <div>
          <strong>Web site:</strong> {detailedCompanyInfo.url}
        </div>

        <div>
          {" "}
          <strong>Find us:</strong>
          <div>
            {detailedCompanyInfo.socialMedia.map((media) => {
              return <div>{media}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCompanyInfo;
