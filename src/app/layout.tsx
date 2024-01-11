import type { Metadata } from "next";
import styles from "./page.module.css";
import ThemeProvider from "../providers/theme-provider";
import { CurrencyProvider } from "../providers/currency-provider";
import { DestinationProvider } from "@/providers/destination-provider";

export const metadata: Metadata = {
  title: "Egruppa",
  description: "Technical Challenge for Egruppa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <ThemeProvider>
          <DestinationProvider>
            <CurrencyProvider>{children}</CurrencyProvider>
          </DestinationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
