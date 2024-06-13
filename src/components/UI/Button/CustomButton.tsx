import { Button, Typography } from "@mui/material";
import * as theme from "./CustomButtonThemes";
import { ReactNode } from "react";

type CustomButtonProps = {
  variant: "contained" | "outlined" | "text";
  style:
    | "contained"
    | "outlined"
    | "AdvertisingSmall"
    | "circleButton"
    | "BlueButton"
    | "LightPurple"
    | "ArrowButtonShedule"
    | "dotted";
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  textVariant: "bold18" | "regular12" | "blue" | "Headline" | "black16" | "not";
  maxWidth?: string;
  width?: string;
  height?: string;
  disableRipple?: boolean;
  children?: ReactNode;
};

const CustomButton = ({
  variant,
  handleClick,
  text,
  textVariant,
  maxWidth,
  width,
  height,
  disableRipple,
  children,
  style,
}: CustomButtonProps) => {
  const ButtonStyles = {
    contained: theme.contained,
    outlined: theme.outlined,
    AdvertisingSmall: theme.AdvertisingSmall,
    circleButton: theme.circleButton,
    BlueButton: theme.BlueButton,
    LightPurple: theme.LightPurple,
    ArrowButtonShedule: theme.ArrowButtonShedule,
    dotted: theme.dotted,
  };
  const TextStyles = {
    bold18: theme.bold18,
    regular12: theme.regular12,
    blue: theme.blue,
    Headline: theme.Headline,
    black16: theme.black16,
    not: theme.not,
  };
  const BStyles = ButtonStyles[style];
  const TStyles = TextStyles[textVariant];

  return (
    <Button
      disableRipple={disableRipple}
      onClick={handleClick}
      variant={variant}
      sx={[
        BStyles,
        theme.CustomButton,
        { maxWidth: maxWidth, height: height, width: width },
      ]}
    >
      {children}
      <Typography sx={TStyles}>{text}</Typography>
    </Button>
  );
};

export default CustomButton;
