"use client";

import Image from "next/image";
import { HeaderContainer, TalkToUsText } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { SELECT_OPTIONS } from "./constants";
import { Box, TextField } from "@mui/material";
import CURRENCIES from "@/constants/currency.constants";
import { TCurrencyValue } from "@/types/currency.types";
import { PhoneEnabled } from "@mui/icons-material";
import useBreakpoint from "@/hooks/use-breakpoints";
import Link from "next/link";
import useCurrency from "@/providers/currency-provider";
import useDestination from "@/providers/destination-provider";
import { useRouter } from "next/navigation";
export default function Header() {
  const { destinationId, setDestinationId, clearSelectedDestination } =
    useDestination();
  const { currency, changeCurrency } = useCurrency();
  const router = useRouter();

  const [hoverLink, setHoverLink] = useState(false);
  const { breakpoint } = useBreakpoint();
  const changeWidth = breakpoint === "sm";
  const hideOptions = breakpoint === "xs";

  const leftWidth = changeWidth ? "50%" : "40%";
  const rightWidth = changeWidth ? "40%" : "30%";

  const onClickLogo = () => {
    clearSelectedDestination();
    router.push("/");
  };
  return (
    <HeaderContainer>
      <Box width={leftWidth} maxWidth={leftWidth} display="flex" gap="50px">
        <Link href="/" onClick={onClickLogo}>
          <Image
            src="/egruppa-logo.png"
            width={150}
            height={50}
            alt="Logo of Egruppa"
            priority
          />
        </Link>

        {!hideOptions && (
          <FormControl fullWidth>
            <TextField
              select
              name="destination"
              value={destinationId?.toString() ?? ""}
              onChange={(e) => setDestinationId(Number(e.target.value))}
              label="Destination"
            >
              {SELECT_OPTIONS.map((option, index) => {
                const { label, value } = option;
                return (
                  <MenuItem value={value.toString()} key={`${label}-${index}`}>
                    {label}
                  </MenuItem>
                );
              })}
            </TextField>
          </FormControl>
        )}
      </Box>
      {!hideOptions && (
        <Box width={rightWidth} maxWidth={rightWidth} display="flex" gap="50px">
          <FormControl fullWidth>
            <TextField
              select
              name="currency"
              label="Currency"
              value={currency}
              onChange={(e) => changeCurrency(e.target.value as TCurrencyValue)}
            >
              {CURRENCIES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Box
            display="flex"
            alignItems="center"
            gap="10px"
            justifyContent="flex-end"
          >
            <PhoneEnabled color={hoverLink ? "primary" : "secondary"} />

            <Link
              href="https://wa.link/757kit"
              onMouseEnter={() => setHoverLink(true)}
              onMouseLeave={() => setHoverLink(false)}
              target="_blank"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TalkToUsText>Talk to us!</TalkToUsText>
            </Link>
          </Box>
        </Box>
      )}
    </HeaderContainer>
  );
}
