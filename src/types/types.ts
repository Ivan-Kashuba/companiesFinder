export type companiesSliceInitialState_T = {
  isLoading: boolean;
  companiesArr: Array<shortCompanyDescription>;
  searchError: string;
  detailedCompanyInfo: null | detailCompanyDescription;
};

export type shortCompanyDescription = {
  companyId: string;
  description: string;
  employeeCount: string;
  founded?: number;
  headquarters: string;
  name: string;
  url: string;
};

export type detailCompanyDescription = {
  city: string;
  cleanDesc: string;
  cleanDescQuality: number;
  companyId: string;
  country: string;
  description: string;
  descriptionQuality: number;
  founded: number;
  name: string;
  shortDesc: string;
  shortDescQuality: number;
  socialMedia: Array<string>;
  url: string;
  nEmployeesMax: number;
  nEmployeesMin: number;
};
