import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Egruppa - Packages Details",
  description: "Technical Challenge for Egruppa - Package Details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
