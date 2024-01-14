"use client";
import CURRENCIES from "@/constants/currency.constants";
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
  symbol: string;
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

  const symbol = CURRENCIES.find((cur) => cur.value === currency)?.label || "";
  const contextValue = {
    currency,
    changeCurrency,
    valueToEuro,
    symbol,
  };
  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => useContext(CurrencyContext);
export default useCurrency;
