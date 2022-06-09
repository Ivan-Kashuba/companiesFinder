import axios from "axios";
import { key } from "../config/config";

const instance = axios.create({
  baseURL: "https://delphai-api.azure-api.net/case-study/",
});

export const companiesAPI = {
  getCompaniesFromSearch(searchText: string) {
    return instance.get(`search?q=${searchText}`, {
      headers: {
        "X-Subscription-Key": key,
      },
    });
  },

  getDetailCompanyInfo(companyId: string) {
    return instance.get(`companies/${companyId}`, {
      headers: {
        "X-Subscription-Key": key,
      },
    });
  },
};
