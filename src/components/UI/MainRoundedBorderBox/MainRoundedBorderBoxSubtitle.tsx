import { Typography } from "@mui/material";
import { ReactNode } from "react";
import * as theme from "./MainRoundedBorderBoxSubtitleThemes";
type Props = {
  children: ReactNode;
};

const MainRoundedBorderBoxSubtitle = ({ children }: Props) => {
  return (
    <Typography sx={theme.MainRoundedBorderBoxSubtitle}>{children}</Typography>
  );
};

export default MainRoundedBorderBoxSubtitle;
