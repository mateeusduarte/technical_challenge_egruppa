"use client";
import DestinationCard from "@/components/organisms/DestinationCard";
import DestinationSummary from "@/components/organisms/DestinationSummary";
import Header from "@/components/organisms/Header";
import useDestination from "@/providers/destination-provider";

export default function PackageDetailsPage() {
  const { selectedDestination } = useDestination();
  return (
    <>
      <Header />
      {selectedDestination && (
        <DestinationSummary destination={selectedDestination} />
      )}
    </>
  );
}
