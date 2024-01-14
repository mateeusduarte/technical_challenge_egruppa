"use client";

import useCurrency from "@/providers/currency-provider";
import {
  BestSellerTag,
  CardTitle,
  ContentContainer,
  DestinationCardContainer,
  DiscountTag,
  LengthText,
} from "./styles";
import { TDestination } from "@/types/destinations.types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type DesinationCardProps = {
  destination: TDestination;
  onClick: () => void;
};
export default function DestinationCard({
  destination,
  onClick,
}: DesinationCardProps) {
  const { symbol, valueToEuro } = useCurrency();

  const value = (destination.previousPrice / valueToEuro).toFixed(2);
  const discountPercentage =
    ((destination.previousPrice - destination.price) /
      destination.previousPrice) *
    100;
  return (
    <DestinationCardContainer destinationId={destination.id} onClick={onClick}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "16px 16px 0 0",
        }}
        src={destination.imageUrl}
        alt={`Image of destination named "${destination.title}" `}
      />
      <BestSellerTag label="Best Seller" color="primary" />
      <CardTitle>{destination.title}</CardTitle>
      <ContentContainer>
        <Typography>{destination.description} </Typography>

        <LengthText>{destination.length} days</LengthText>
        <Box display="flex" flexDirection="column">
          <Typography
            display="flex"
            alignItems="center"
            gap="5px"
            style={{ height: 20 }}
          >
            From
            <p style={{ textDecoration: "line-through" }}>
              {symbol}
              {value}
            </p>
          </Typography>

          <Typography fontSize={20} fontWeight={600}>
            {symbol}
            {destination.price}
          </Typography>
        </Box>
        <DiscountTag
          label={`${discountPercentage.toFixed(2)}%`}
          color="primary"
        />
      </ContentContainer>
    </DestinationCardContainer>
  );
}
