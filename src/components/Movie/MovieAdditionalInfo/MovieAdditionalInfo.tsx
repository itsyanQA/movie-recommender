import React from "react";
import styles from "./MovieAdditionalInfo.module.scss";
import { Revenue } from "../../../models/interfaces/base-movie-response.model";
import { FinanceInfo } from "../../../models/interfaces/finance-info.model";
import { MovieFinancesCategories } from "../../../models/enums/MovieFinancesCategories";

type MovieAdditionalInfoProps = {
  revenue: Revenue;
};

export default function MovieAdditionalInfo({ revenue }: MovieAdditionalInfoProps) {
  const shouldShowAdditionalInfo: boolean =
    !!revenue?.lifetimeGross ||
    !!revenue?.openingWeekendGross ||
    !!revenue?.productionBudget ||
    !!revenue?.worldWideGross;
  const moneyInfo: FinanceInfo[] = [
    {
      category: MovieFinancesCategories.PRODUCTION_BUDGET,
      total: `${revenue?.productionBudget?.budget?.amount.toLocaleString()} ${
        revenue?.productionBudget?.budget?.currency
      }`,
      isCategoryValid: !!revenue?.productionBudget?.budget?.amount,
    },
    {
      category: MovieFinancesCategories.LIFETIME_GROSS,
      total: `${revenue?.lifetimeGross?.total?.amount.toLocaleString()} ${revenue?.lifetimeGross?.total?.currency}`,
      isCategoryValid: !!revenue?.lifetimeGross?.total?.amount,
    },
    {
      category: MovieFinancesCategories.OPENING_WEEKEND_GROSS,
      total: `${revenue?.openingWeekendGross?.gross?.amount} ${revenue?.openingWeekendGross?.gross?.currency}`,
      isCategoryValid: !!revenue?.openingWeekendGross?.gross?.amount,
    },
    {
      category: MovieFinancesCategories.WORLD_WIDE_GROSS,
      total: `${revenue?.worldWideGross?.total?.amount} ${revenue?.worldWideGross?.total?.currency}`,
      isCategoryValid: !!revenue?.worldWideGross?.total?.amount,
    },
  ];

  if (!shouldShowAdditionalInfo) return null;

  return (
    <section className={styles.additionalInfo}>
      <h3>Additional Info</h3>
      <ul>
        {moneyInfo?.map((info, index) => {
          if (info.isCategoryValid) {
            return <li key={index}>{`${info.category}: ${info.total}`}</li>;
          }
        })}
      </ul>
    </section>
  );
}
