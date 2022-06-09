import { useSelector } from "react-redux";
import {
  companiesArrSelector,
  detailedCompanyInfoSelector,
  isLoadingSelector,
  searchErrorSelector,
} from "../store/selectors/companiesSelector";
import { useAppDispatch } from "./useAppDispatch";
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
  DetailCompanyDescription,
  ShortCompanyDescription,
} from "../types/types";

export const useCompanies = () => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(isLoadingSelector);
  const companiesArr = useSelector(companiesArrSelector);
  const searchError = useSelector(searchErrorSelector);
  const detailedCompanyInfo = useSelector(detailedCompanyInfoSelector);

  const _setLoading = (status: boolean) => {
    return dispatch(setLoading(status));
  };

  const _setCompaniesArr = (compArr: Array<ShortCompanyDescription>) => {
    return dispatch(setCompaniesArr(compArr));
  };

  const _setSearchError = (error: string) => {
    return dispatch(setSearchError(error));
  };

  const _setDetailedCompanyInfo = (companyInfo: DetailCompanyDescription) => {
    return dispatch(setDetailedCompanyInfo(companyInfo));
  };

  const _getCompaniesFromSearch = (searchText: string) => {
    return dispatch(getCompaniesFromSearch(searchText));
  };

  const _getDetailCompanyInfo = (companyId: string) => {
    return dispatch(getDetailCompanyInfo(companyId));
  };

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
