"use client";
import DESTINATIONS from "@/constants/destinations.constant";

import { TDestination } from "@/types/destinations.types";
import { useParams, usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export type DestinationProviderProps = {
  children: React.ReactNode;
};

export type DestinationContextProps = {
  destinationId?: number;
  setDestinationId: (id: number) => void;
  clearSelectedDestination: () => void;
  selectedDestination?: TDestination;
};
export const DestinationContext = createContext<DestinationContextProps>(
  {} as DestinationContextProps
);

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [destinationId, setDestinationId] = useState<number | undefined>(
    params?.id ? Number(params?.id) : undefined
  );

  useEffect(() => {
    if (destinationId && destinationId.toString() !== params.id) {
      router.push(`/package-details/${destinationId}`);
    }
  }, [destinationId, router, params]);

  const clearSelectedDestination = () => {
    setDestinationId(undefined);
  };

  const selectedDestination = DESTINATIONS.find(
    (destination) => destination.id === destinationId
  );

  const contextValue = {
    destinationId,
    setDestinationId,
    clearSelectedDestination,
    selectedDestination,
  };
  return (
    <DestinationContext.Provider value={contextValue}>
      {children}
    </DestinationContext.Provider>
  );
};

const useDestination = () => useContext(DestinationContext);
export default useDestination;
