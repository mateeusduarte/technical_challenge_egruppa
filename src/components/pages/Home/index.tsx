"use client";
import Header from "@/components/organisms/Header";
import {
  ImageContainer,
  MainImage,
  PageTitle,
  TripsContainer,
  TripsContainerTitle,
  TripsFlexContainer,
} from "./styles";
import useBreakpoint from "@/hooks/use-breakpoints";
import { Box, Button } from "@mui/material";
import DESTINATIONS from "@/constants/destinations.constant";
import DestinationCard from "@/components/organisms/DestinationCard";
import useDestination from "@/providers/destination-provider";

export default function HomePage() {
  const { breakpoint } = useBreakpoint();
  const { setDestinationId } = useDestination();

  const isMobile = breakpoint === "xs";
  const isTablet = breakpoint === "sm";
  const titleFontSize = isMobile || isTablet ? "1.5em" : "2.5rem";
  const buttonTop = isMobile || isTablet ? 250 : 300;
  const buttonLeft = isMobile || isTablet ? 20 : 150;
  const cardWidth = isMobile ? "100%" : isTablet ? "40%" : "28%";

  return (
    <>
      <Header />
      <ImageContainer>
        <MainImage
          src="/main-image.avif"
          alt="world cup picture as main page background"
          width={0}
          height={0}
          sizes="100vw"
        />
      </ImageContainer>
      <PageTitle fontSize={titleFontSize}>
        Gestión de <b>viajes en grupo </b>
        <br /> para entidades deportivas
      </PageTitle>
      <Button
        variant="contained"
        style={{
          zIndex: 99999,
          position: "absolute",
          top: buttonTop,
          left: buttonLeft,
          color: "white",
          textTransform: "none",
        }}
      >
        Book now!
      </Button>
      <TripsContainer>
        <TripsContainerTitle fontSize={"1.5em"}>
          Los <b>mejores</b> destinos!
        </TripsContainerTitle>
        <TripsFlexContainer>
          {DESTINATIONS.map((destination, index) => {
            return (
              <Box
                key={`${index}-${destination.id}`}
                minWidth={cardWidth}
                maxWidth={cardWidth}
              >
                <DestinationCard
                  destination={destination}
                  onClick={() => setDestinationId(destination.id)}
                />
              </Box>
            );
          })}
        </TripsFlexContainer>
      </TripsContainer>
    </>
  );
}
