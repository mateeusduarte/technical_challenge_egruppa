"use client";
import currencyService from "@/services/currency.services";
import { TCurrencyValue } from "@/types/currency.types";
import { createContext, useContext, useEffect, useState } from "react";

export type CurrencyProviderProps = {
  children: React.ReactNode;
};

export type CurrencyContextProps = {
  currency: TCurrencyValue;
  changeCurrency: (_currency: TCurrencyValue) => void;
  valueToEuro: number;
};
export const CurrencyContext = createContext<CurrencyContextProps>(
  {} as CurrencyContextProps
);

export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [currency, changeCurrency] = useState<TCurrencyValue>("EUR");
  const [valueToEuro, changeValueToEuro] = useState(1);

  useEffect(() => {
    const convertCurrency = async () => {
      const response = await currencyService.convert(currency);
      const newValue = response.data[currency];
      changeValueToEuro(newValue);
    };

    if (currency === "EUR") {
      changeValueToEuro(1);
    } else {
      convertCurrency();
    }
  }, [currency]);

  const contextValue = {
    currency,
    changeCurrency,
    valueToEuro: 1,
  };
  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => useContext(CurrencyContext);
export default useCurrency;
