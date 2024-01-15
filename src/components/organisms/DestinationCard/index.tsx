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
import messages from "./messages";

type DestinationCardProps = {
  destination: TDestination;
  onClick: () => void;
};
export default function DestinationCard({
  destination,
  onClick,
}: DestinationCardProps) {
  const { symbol, valueToEuro } = useCurrency();

  const previousPriceValue = (destination.previousPrice / valueToEuro).toFixed(
    2
  );
  const priceValue = (destination.price / valueToEuro).toFixed(2);
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

        <LengthText>
          {destination.length} {messages.days}
        </LengthText>

        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" gap="5px">
            <Typography style={{ height: 20 }}>{messages.fromText}</Typography>
            <Typography style={{ textDecoration: "line-through", height: 20 }}>
              {symbol}
              {previousPriceValue}
            </Typography>
          </Box>

          <Typography fontSize={20} fontWeight={600}>
            {symbol}
            {priceValue}
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
