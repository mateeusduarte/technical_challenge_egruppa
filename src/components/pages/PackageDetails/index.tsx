"use client";
import DestinationCard from "@/components/organisms/DestinationCard";
import DestinationSummary from "@/components/organisms/DestinationSummary";
import Header from "@/components/organisms/Header";
import HotelCard from "@/components/organisms/HotelCard";
import useDestination from "@/providers/destination-provider";
import hotelService from "@/services/hotel.services";
import { THotel } from "@/types/hotel.types";
import { useEffect, useState } from "react";
import { HotelsContainer } from "./styles";
import { Box, Typography } from "@mui/material";

export default function PackageDetailsPage() {
  const { selectedDestination } = useDestination();
  const [hotels, setHotels] = useState<THotel[]>([]);

  useEffect(() => {
    if (hotels.length > 0) {
      return;
    }
    const getHotels = async () => {
      const response = await hotelService.get();

      setHotels(response);
    };
    getHotels();
  }, []);
  return (
    <>
      <Header />
      {selectedDestination && (
        <DestinationSummary destination={selectedDestination} />
      )}

      <HotelsContainer>
        <Box marginTop="45px">
          <Typography fontSize={30}>
            Alojamiento {selectedDestination?.length} noches
          </Typography>
        </Box>
        {hotels &&
          hotels.length > 0 &&
          hotels.map((hotel, index) => {
            return (
              <HotelCard
                hotel={hotel}
                key={`${hotel.name} - ${index}`}
                index={index}
              />
            );
          })}
      </HotelsContainer>
    </>
  );
}
