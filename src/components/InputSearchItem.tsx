import React, { ChangeEvent, useEffect, useState } from "react";
import { Alert, Button, Input } from "@mui/material";
import "./../App.scss";
import { useCompanies } from "../hooks/useCompanies";

const InputSearchItem = () => {
  useEffect(() => {
    setSearchError("");
  }, []);

  const { getCompaniesFromSearch, searchError, setSearchError } =
    useCompanies();

  const [inputText, setInputText] = useState<string>("");

  const onInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInputText(event.target.value);
  };

  return (
    <div className="searchContainer">
      <Input
        placeholder="Search ..."
        type="text"
        value={inputText}
        onChange={(event) => onInputChange(event)}
      />

      <Button
        onClick={() => getCompaniesFromSearch(inputText)}
        size="small"
        variant="contained"
      >
        Find
      </Button>

      <div className="error">
        {searchError ? <Alert severity="error">{searchError}</Alert> : null}
      </div>
    </div>
  );
};

export default InputSearchItem;
