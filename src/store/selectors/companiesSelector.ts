import { AppStateType } from "../store";

export const isLoadingSelector = (state: AppStateType) => {
  return state.companiesSlice.isLoading;
};

export const companiesArrSelector = (state: AppStateType) => {
  return state.companiesSlice.companiesArr;
};

export const searchErrorSelector = (state: AppStateType) => {
  return state.companiesSlice.searchError;
};

export const detailedCompanyInfoSelector = (state: AppStateType) => {
  return state.companiesSlice.detailedCompanyInfo;
};
