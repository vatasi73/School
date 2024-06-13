import * as theme from "./AdvertisingThemes";
import { Box, Typography } from "@mui/material";
import CustomButton from "../Button/CustomButton";
import Gift from "../../../assets/giftillustration.svg";
type Props = {
  title: string;
  subTitle: string;
  buttonText: string;
  handleCkick: () => void;
};

const Advertising = ({ title, subTitle, buttonText, handleCkick }: Props) => {
  return (
    <Box sx={theme.RounderBoxStyle}>
      <Typography sx={theme.Title}>{title}</Typography>
      <Typography sx={theme.SubTitle}>{subTitle}</Typography>
      <CustomButton
        maxWidth="68px"
        height="32px"
        textVariant="regular12"
        disableRipple
        variant="contained"
        style="AdvertisingSmall"
        text={buttonText}
        handleClick={handleCkick}
      />
      <img src={Gift} alt="gift" style={theme.img} />
    </Box>
  );
};

export default Advertising;
