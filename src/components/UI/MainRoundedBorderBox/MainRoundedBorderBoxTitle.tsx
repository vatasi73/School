import { Typography } from "@mui/material";
import { ReactNode } from "react";
import * as theme from "./MainRoundedBorderBoxTitleThemes";
type Props = {
  children: ReactNode;
  marginBottom: string;
};

const MainRoundedBorderBoxTitle = ({ children, marginBottom }: Props) => {
  return (
    <Typography
      sx={[theme.MainRoundedBorderBoxTitle, { marginBottom: marginBottom }]}
    >
      {children}
    </Typography>
  );
};

export default MainRoundedBorderBoxTitle;
