import { Box, Chip, Typography, styled } from "@mui/material";
import { TDestinationCardContainerProps } from "./types";

export const DestinationCardContainer = styled(
  Box
)<TDestinationCardContainerProps>`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
  border-radius: 16px;
  max-height: 100%;
  position: relative;
  cursor: pointer;
  :hover {
    ${(props) =>
      `
    transform: translate3D(0, -1px, 0) scale(1.03) rotate(${
      props.destinationId % 2 !== 0 ? "-" : ""
    }0.005turn);
  `}
  }
`;

export const BestSellerTag = styled(Chip)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
  color: white;
`;

export const CardTitle = styled(Typography)`
  position: absolute;
  top: 150px;
  left: 20px;
  color: white;
  background-color: #e62f40;
  padding: 0 5px;
  @media (max-width: 768px) {
    left: 10px;
  }
`;

export const LengthText = styled(Typography)`
  color: white;
  background-color: #e62f40;
  padding: 0 5px;
  width: fit-content;
`;

export const ContentContainer = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const DiscountTag = styled(Chip)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  color: white;
  transform: rotate(-0.03turn);
`;
