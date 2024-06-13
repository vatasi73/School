import { Link } from "@mui/material";

import * as theme from "./CustomLinkThemes";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const CustomLink = (props: Props) => {
  return (
    <Link href="/" sx={theme.CustomLink}>
      {props.children}
    </Link>
  );
};
export default CustomLink;
