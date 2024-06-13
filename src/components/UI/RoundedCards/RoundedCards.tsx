import { Box, Typography } from "@mui/material";
import * as theme from "./RoundedCardsThemes";
type Props = {
  text: string;
  img: string;
  background: string;
};

const RoundedCards = ({ img, text, background }: Props) => {
  return (
    <Box
      sx={[
        theme.RoundedCardsWrapper,
        {
          background: background,
        },
      ]}
    >
      <Typography sx={theme.Text}>{text}</Typography>
      <img src={img} alt={text} style={theme.img} />
    </Box>
  );
};

export default RoundedCards;
