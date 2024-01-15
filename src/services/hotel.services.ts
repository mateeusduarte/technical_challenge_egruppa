import { THotel } from "@/types/hotel.types";
import axios from "axios";

class HotelService {
  async get(): Promise<THotel[]> {
    const hotels = [];

    for (let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * 1000);

      const response = await axios.get(
        `http://api.egruppa.com/accommodations/${id}`
      );
      hotels.push(response.data);
    }

    return hotels;
  }
}

const hotelService = new HotelService();
export default hotelService;
