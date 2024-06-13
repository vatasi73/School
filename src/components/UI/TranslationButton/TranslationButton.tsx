import { Button } from "@mui/material";
import * as theme from "./TranslationButtonThemes";
import { memo } from "react";
type TranslationButtonProps = {
  active: boolean;
  name: string;
  handleClick: () => void;
};

const TranslationButton = memo(
  ({ active, name, handleClick }: TranslationButtonProps) => {
    const dynamicStyles = {
      color: active ? "#7362BC" : "#79747F",
      fontSize: active ? "24px" : "16px",
    };
    return (
      <Button
        disableRipple
        variant={"text"}
        sx={[theme.TranslationButtonTheme, dynamicStyles]}
        onClick={handleClick}
      >
        {name}
      </Button>
    );
  }
);

export default TranslationButton;
