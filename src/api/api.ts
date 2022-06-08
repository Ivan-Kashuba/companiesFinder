import axios from "axios";

const key = "b6ef068dbdca4c8480976ceaa386e6f5";

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
