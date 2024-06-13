import { Box } from "@mui/material";
import { ReactNode } from "react";
import * as theme from "./MainRoundedBorderBoxThemes";
type Props = {
  children: ReactNode;
  width: string;
  height: string;
};

const MainRoundedBorderBox = ({ children, width, height }: Props) => {
  return (
    <Box
      sx={[
        theme.MainRoundedBorderBoxW,
        {
          width: width,
          height: height,
        },
      ]}
    >
      {children}
    </Box>
  );
};

export default MainRoundedBorderBox;
