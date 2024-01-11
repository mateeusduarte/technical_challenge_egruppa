export type TCurrencyValue = "USD" | "EUR" | "BRL" | "JPY";

export type TGetCurrencyReturn = {
  data: Record<TCurrencyValue, number>;
};
