import { Box, Chip, Typography, styled } from "@mui/material";

export const DestinationSummaryContainer = styled(Box)`
  margin-top: 85px;
`;

export const SummaryTitle = styled(Typography)`
  background-color: #e62f40;
  padding: 0 15px;
  color: white;
  width: fit-content;
`;

export const DaysTag = styled(Chip)`
  position: absolute;
  top: 20px;
  right: 23%;
  z-index: 9999;
  color: white;
  transform: rotate(0.03turn);
`;

export const PriceBox = styled(Box)`
  background-color: #e62f40;
  border-radius: 50%;
  padding: 30px;
  transform: rotate(0.03turn);
  height: 100px;
  justify-content: center;
  align-items: center;
`;
