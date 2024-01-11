"use client";

import theme from "@/theme";
import { ThemeProvider as MUIProvider } from "@mui/material";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MUIProvider theme={theme}>{children}</MUIProvider>;
}
