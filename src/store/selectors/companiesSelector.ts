import { AppStateType } from "../store";

export const getIsLoading_S = (state: AppStateType) => {
  return state.companiesSlice.isLoading;
};

export const getCompaniesArr_S = (state: AppStateType) => {
  return state.companiesSlice.companiesArr;
};

export const getSearchError_S = (state: AppStateType) => {
  return state.companiesSlice.searchError;
};

export const getDetailedCompanyInfo_S = (state: AppStateType) => {
  return state.companiesSlice.detailedCompanyInfo;
};
