import { Box } from "@mui/material";
import Logo from "../../UI/Logo/Logo";
import TextLogo from "../../../assets/Text_1_.svg";
import * as theme from "./SideBarLogoThemes";
const SideBarLogo = () => {
  return (
    <Box sx={theme.SideBarLogoWrapper}>
      <Logo width="58px" />
      <a href="/">
        <img src={TextLogo} alt="TextLogo" style={theme.img} />
      </a>
    </Box>
  );
};

export default SideBarLogo;
