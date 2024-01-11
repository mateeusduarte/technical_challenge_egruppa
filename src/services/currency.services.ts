import { TCurrencyValue, TGetCurrencyReturn } from "@/types/currency.types";
import axios from "axios";

class CurrencyService {
  async convert(currency: TCurrencyValue): Promise<TGetCurrencyReturn> {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YUwCVNGrDL9tFOpZeBR1RozdkhWhIEZoa6d1dvo8&currencies=${currency}&base_currency=EUR`
    );

    return response.data;
  }
}

const currencyService = new CurrencyService();
export default currencyService;
