import { AppDispatch } from "../store";
import { companiesAPI } from "../../api/api";
import {
  setCompaniesArr,
  setDetailedCompanyInfo,
  setLoading,
  setSearchError,
} from "../slices/companiesSlice";

export const getCompaniesFromSearch =
  (searchText: string) => async (dispatch: AppDispatch) => {
    dispatch(setCompaniesArr([]));
    dispatch(setSearchError(""));
    dispatch(setLoading(true));
    try {
      const response = await companiesAPI.getCompaniesFromSearch(searchText);
      if (response.data.companiesList) {
        dispatch(setCompaniesArr(response.data.companiesList));
      } else {
        dispatch(setSearchError("Cant find current query"));
      }
      dispatch(setLoading(false));
    } catch (err: any) {
      dispatch(setSearchError(err.response as string));
      dispatch(setLoading(false));
    }
  };

export const getDetailCompanyInfo =
  (companyId: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await companiesAPI.getDetailCompanyInfo(companyId);
      dispatch(setDetailedCompanyInfo(response.data));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
      dispatch(setLoading(false));
    }
  };
