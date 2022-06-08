import { useSelector } from "react-redux";
import {
  getCompaniesArr_S,
  getDetailedCompanyInfo_S,
  getIsLoading_S,
  getSearchError_S,
} from "../store/selectors/companiesSelector";
import { useAppDispatch } from "./useAppDispatch";
import { useCallback } from "react";
import {
  setCompaniesArr,
  setDetailedCompanyInfo,
  setLoading,
  setSearchError,
} from "../store/slices/companiesSlice";
import {
  getCompaniesFromSearch,
  getDetailCompanyInfo,
} from "../store/thunks/thunks";
import {
  detailCompanyDescription,
  shortCompanyDescription,
} from "../types/types";

export const useCompanies = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getIsLoading_S);
  const companiesArr = useSelector(getCompaniesArr_S);
  const searchError = useSelector(getSearchError_S);
  const detailedCompanyInfo = useSelector(getDetailedCompanyInfo_S);

  const _setLoading = useCallback(
    (status: boolean) => {
      return dispatch(setLoading(status));
    },
    [dispatch]
  );

  const _setCompaniesArr = useCallback(
    (compArr: Array<shortCompanyDescription>) => {
      return dispatch(setCompaniesArr(compArr));
    },
    [dispatch]
  );

  const _setSearchError = useCallback(
    (error: string) => {
      return dispatch(setSearchError(error));
    },
    [dispatch]
  );

  const _setDetailedCompanyInfo = useCallback(
    (companyInfo: detailCompanyDescription) => {
      return dispatch(setDetailedCompanyInfo(companyInfo));
    },
    [dispatch]
  );

  const _getCompaniesFromSearch = useCallback(
    (searchText: string) => {
      return dispatch(getCompaniesFromSearch(searchText));
    },
    [dispatch]
  );

  const _getDetailCompanyInfo = useCallback(
    (companyId: string) => {
      return dispatch(getDetailCompanyInfo(companyId));
    },
    [dispatch]
  );
  return {
    isLoading,
    companiesArr,
    searchError,
    detailedCompanyInfo,
    setLoading: _setLoading,
    setCompaniesArr: _setCompaniesArr,
    setSearchError: _setSearchError,
    setDetailedCompanyInfo: _setDetailedCompanyInfo,
    getCompaniesFromSearch: _getCompaniesFromSearch,
    getDetailCompanyInfo: _getDetailCompanyInfo,
  };
};
