import { TCurrencyValue } from "@/types/currency.types";
import { TSelectOptions } from "@/types/inputs.types";

const CURRENCIES: TSelectOptions<TCurrencyValue> = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BRL",
    label: "R$",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default CURRENCIES;
