"use client";

import styled from "styled-components";

export const HotelsContainer = styled.div`
  width: 100vw;
  margin-top: -10px;
  min-height: 400px;
  position: relative;
  padding: 20px 20%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 10%;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
`;
