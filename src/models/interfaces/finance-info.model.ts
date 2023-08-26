import { MovieFinancesCategories } from "../enums/MovieFinancesCategories";

export interface FinanceInfo {
  category: MovieFinancesCategories;
  total: string;
  isCategoryValid: boolean;
}
