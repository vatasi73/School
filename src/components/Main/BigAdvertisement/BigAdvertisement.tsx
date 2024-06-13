import { Box, Typography } from "@mui/material";
import Cat from "../../../assets/Cat.png";
import * as theme from "./BigAdvertisementThemes";
const BigAdvertisement = () => {
  return (
    <Box sx={theme.BigAdvertisementWrapper}>
      <Typography sx={theme.TitleText} variant="h2">
        До 31 декабря любой <br />
        курс со скидкой 20%
      </Typography>
      <Typography sx={theme.SubTitleText} component="p">
        До конца года у вас есть уникальная возможность воспользоваться нашей
        новогодней скидкой 20% на любой курс!
      </Typography>
      <img src={Cat} alt="Cat" style={theme.img} />
    </Box>
  );
};

export default BigAdvertisement;
