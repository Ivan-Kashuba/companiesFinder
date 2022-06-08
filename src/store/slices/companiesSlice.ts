import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  companiesSliceInitialState_T,
  detailCompanyDescription,
  shortCompanyDescription,
} from "../../types/types";

const initialState: companiesSliceInitialState_T = {
  isLoading: false,
  companiesArr: [],
  searchError: "",
  detailedCompanyInfo: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setCompaniesArr(
      state,
      action: PayloadAction<Array<shortCompanyDescription>>
    ) {
      state.companiesArr = action.payload;
    },
    setSearchError(state, action: PayloadAction<string>) {
      state.searchError = action.payload;
    },
    setDetailedCompanyInfo(
      state,
      action: PayloadAction<detailCompanyDescription>
    ) {
      state.detailedCompanyInfo = action.payload;
    },
  },
});

export const {
  setLoading,
  setCompaniesArr,
  setSearchError,
  setDetailedCompanyInfo,
} = companiesSlice.actions;

export default companiesSlice.reducer;
