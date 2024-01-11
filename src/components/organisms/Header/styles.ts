"use client";

import { Typography } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  height: 85px;
  padding: 15px 50px;
  background-color: #eeeff3;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const TalkToUsText = styled(Typography)`
  white-space: nowrap;
  &:hover {
    color: #e62f40;
    font-weight: 600;
  }
`;
