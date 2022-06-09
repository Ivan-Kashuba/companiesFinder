import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CompaniesSliceInitialState_T,
  DetailCompanyDescription,
  ShortCompanyDescription,
} from "../../types/types";

const initialState: CompaniesSliceInitialState_T = {
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
      action: PayloadAction<Array<ShortCompanyDescription>>
    ) {
      state.companiesArr = action.payload;
    },
    setSearchError(state, action: PayloadAction<string>) {
      state.searchError = action.payload;
    },
    setDetailedCompanyInfo(
      state,
      action: PayloadAction<DetailCompanyDescription>
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
