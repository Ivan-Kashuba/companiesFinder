import React from "react";
import { ShortCompanyDescription } from "../types/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CompanyItemProps = {
  companyInfo: ShortCompanyDescription;
};

const CompanyItem = ({ companyInfo }: CompanyItemProps) => {
  const navigate = useNavigate();

  const { description, companyId, founded, headquarters, name, url } =
    companyInfo;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {headquarters} {founded ? founded : null}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {url}
        </Typography>
        <Typography variant="body2" style={{ minHeight: "100px" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            navigate(`/detailed/${companyId}`);
          }}
          size="small"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CompanyItem;
