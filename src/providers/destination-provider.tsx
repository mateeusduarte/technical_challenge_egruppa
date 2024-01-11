"use client";
import currencyService from "@/services/currency.services";
import { TCurrencyValue } from "@/types/currency.types";
import { useParams, usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export type DestinationProviderProps = {
  children: React.ReactNode;
};

export type DestinationContextProps = {
  destinationId?: number;
  setDestinationId: (id: number) => void;
  clearSelectedDestination: () => void;
};
export const DestinationContext = createContext<DestinationContextProps>(
  {} as DestinationContextProps
);

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const pathname = usePathname();

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

  const contextValue = {
    destinationId,
    setDestinationId,
    clearSelectedDestination,
  };
  return (
    <DestinationContext.Provider value={contextValue}>
      {children}
    </DestinationContext.Provider>
  );
};

const useDestination = () => useContext(DestinationContext);
export default useDestination;
