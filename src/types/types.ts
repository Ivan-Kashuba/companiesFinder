export type CompaniesSliceInitialState_T = {
  isLoading: boolean;
  companiesArr: Array<ShortCompanyDescription>;
  searchError: string;
  detailedCompanyInfo: null | DetailCompanyDescription;
};

export type ShortCompanyDescription = {
  companyId: string;
  description: string;
  employeeCount: string;
  founded?: number;
  headquarters: string;
  name: string;
  url: string;
};

export type DetailCompanyDescription = {
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
