"use client";

import { TDestination } from "@/types/destinations.types";
import Image from "next/image";
import {
  DaysTag,
  DestinationSummaryContainer,
  PriceBox,
  SummaryTitle,
} from "./styles";
import { Box, Typography } from "@mui/material";
import useCurrency from "@/providers/currency-provider";
import useBreakpoint from "@/hooks/use-breakpoints";
import messages from "./messages";

type DestinationSummaryProps = {
  destination: TDestination;
};
export default function DestinationSummary({
  destination,
}: DestinationSummaryProps) {
  const { breakpoint } = useBreakpoint();
  const { symbol, valueToEuro } = useCurrency();

  const { title, imageUrl, description, length } = destination;

  const previousPriceValue = (destination.previousPrice / valueToEuro).toFixed(
    2
  );
  const priceValue = (destination.price / valueToEuro).toFixed(2);

  const isMobile = breakpoint === "xs";
  const isTablet = breakpoint === "sm";

  const imageWidth = isTablet || isMobile ? "90%" : "60%";
  const flexDirection = isMobile ? "column" : "row";
  const imageSectionWidth = isMobile ? "100%" : "50%";
  const marginTopSummary = isMobile ? "20px" : 0;
  const paddingSummary = isMobile ? "10%" : 0;
  return (
    <DestinationSummaryContainer>
      <Box display="flex" paddingTop={10} flexDirection={flexDirection}>
        <Box
          width={imageSectionWidth}
          display="flex"
          justifyContent="center"
          height="300px"
          position="relative"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            priority
            style={{
              width: imageWidth,
              height: "100%",
              borderRadius: 16,
            }}
            src={imageUrl}
            alt={`Image of destination named "${title}" `}
          />
          <DaysTag label={`${length} ${messages.days}`} color="primary" />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          marginTop={marginTopSummary}
          padding={paddingSummary}
        >
          <Box display="flex" flexDirection="column" gap="20px">
            <SummaryTitle fontSize={30} fontWeight={600}>
              {title}
            </SummaryTitle>
            <Typography>{description}</Typography>
          </Box>

          <PriceBox display="flex" flexDirection="column" alignSelf="flex-end">
            <Box display="flex" alignItems="center" gap="5px">
              <Typography fontSize={20} style={{ height: 20 }} color="white">
                {messages.fromText}
              </Typography>
              <Typography
                style={{ textDecoration: "line-through", height: 20 }}
                fontSize={20}
                color="white"
              >
                {symbol}
                {previousPriceValue}
              </Typography>
            </Box>

            <Typography fontSize={40} fontWeight={600} color="white">
              {symbol}
              {priceValue}
            </Typography>
          </PriceBox>
        </Box>
      </Box>
    </DestinationSummaryContainer>
  );
}
