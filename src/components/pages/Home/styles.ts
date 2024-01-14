"use client";

import styled from "styled-components";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

export const ImageContainer = styled.div`
  width: 100vw;
  height: 65vh;
  margin-top: 85px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export const MainImage = styled(Image)`
  filter: brightness(0.3);
  opacity: 0.8;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const PageTitle = styled(Typography)`
  position: absolute;
  top: 160px;
  left: 150px;
  color: white;
  white-space: nowrap;
  @media (max-width: 768px) {
    left: 20px;
  }
  @media (max-width: 350px) {
    left: 5px;
  }
  b {
    color: #e62f40;
  }
`;

export const BookNowButton = styled(Button)`
  position: absolute;
  top: 180px !important;
  z-index: 9999;
`;

export const TripsContainerTitle = styled(Typography)`
  color: black;
  white-space: nowrap;
  b {
    color: #e62f40;
  }
`;

export const TripsContainer = styled.div`
  background: #eceff3;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: -50px;
  height: 100%;
  border-radius: 16px;
  position: relative;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 350px) {
    padding: 10px;
  }
  max-width: 100vw;
`;

export const TripsFlexContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 50px;
  height: 100%;
  min-height: 400px;
  padding: 10px;
  @media (max-width: 768px) {
    gap: 10px;
  }
  @media (max-width: 350px) {
    gap: 10px;
  }
`;
