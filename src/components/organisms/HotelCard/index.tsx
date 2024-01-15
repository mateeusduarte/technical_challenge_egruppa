"use client";

import { THotel } from "@/types/hotel.types";
import { FeaturesTag, HotelCardContainer, RatingTag, TypeTag } from "./styles";

import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import useBreakpoint from "@/hooks/use-breakpoints";
import messages from "./messages";

type HotelCardProps = {
  hotel: THotel;
  index: number;
};
export default function HotelCard({ hotel, index }: HotelCardProps) {
  const { breakpoint } = useBreakpoint();

  const isMobile = breakpoint === "xs";
  const isTablet = breakpoint === "sm";
  function processServices(inputString: string) {
    const parts = inputString.split("/");

    const processedArray = parts.map((part) => part.trim().toLowerCase());

    return processedArray;
  }

  const services = processServices(hotel.services);
  const titleFontSize = isMobile ? 15 : 20;
  const locationFontSize = isMobile ? 10 : 15;
  return (
    <HotelCardContainer>
      <Box
        maxWidth={"45%"}
        width={"45%"}
        minWidth={"45%"}
        height={"100%"}
        boxSizing="border-box"
      >
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "16px 0 0 16px",
          }}
          src={`/hotel${index}.jpeg`}
          alt="Hotel photo"
        />
      </Box>
      <Box
        padding="20px"
        boxSizing="border-box"
        display="flex"
        flexDirection="column"
        maxWidth={"55%"}
        width={"55%"}
        minWidth={"55%"}
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" gap="10px" width="100%">
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography fontSize={titleFontSize}>{hotel.name}</Typography>
            {!isMobile && <TypeTag label={hotel.type} color="default" />}
          </Box>

          <Typography fontSize={locationFontSize}>{hotel.address}</Typography>
        </Box>
        <Box display="flex" gap="10px" maxWidth="100%" flexWrap="wrap">
          <RatingTag color="default" label={hotel.rating} />
          <Box display="flex" gap="5px" overflow="auto">
            {services &&
              services.length > 0 &&
              services[0].length > 1 &&
              services?.map((service) => {
                return (
                  <FeaturesTag
                    color="primary"
                    label={service}
                    key={Math.random()}
                  />
                );
              })}
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
        >
          <Button
            variant="contained"
            style={{
              color: "white",
              borderRadius: 16,
              width: "fit-content",
            }}
          >
            {messages.selectButton}
          </Button>
        </Box>
      </Box>
    </HotelCardContainer>
  );
}
