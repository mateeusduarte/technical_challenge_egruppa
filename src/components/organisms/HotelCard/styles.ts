import { Box, Chip, styled } from "@mui/material";

export const HotelCardContainer = styled(Box)`
  border: 1.5px solid rgb(229, 229, 229);
  border-radius: 16px;
  height: 250px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
`;

export const TypeTag = styled(Chip)`
  z-index: 9999;
  color: #e62f40;
  border: 2px solid #e62f40;
  font-weight: 600;
  background-color: white;
`;

export const RatingTag = styled(Chip)`
  z-index: 9999;
  color: white;
  font-weight: 600;
  font-size: 10px;
  padding: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #9e8629;
  span {
    padding: 0;
  }
`;

export const FeaturesTag = styled(Chip)`
  z-index: 9999;
  color: #9e8629;
  border: 2px solid #9e8629;
  font-weight: 600;
  background-color: white;
  width: fit-content;
`;
