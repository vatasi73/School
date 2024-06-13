import { Box } from "@mui/material";
import BigAdvertisement from "./BigAdvertisement/BigAdvertisement";
import Timer from "./Timer/Timer";
import RoundedCards from "../UI/RoundedCards/RoundedCards";
import HomeWork from "../../assets/homeWork.svg";
import Report from "../../assets/Report.svg";
import Balance from "./Balance/Balance";
import UpcomingLessons from "./UpcomingLessons/UpcomingLessons";
import * as theme from "./MainThemes";
const Main = () => {
  return (
    <Box sx={theme.MainWrapper}>
      <Box sx={theme.TopCardsWrapper}>
        <BigAdvertisement />
        <Timer />
        <Box sx={theme.SmallCardsWrapper}>
          <RoundedCards
            text="Домашние задания"
            img={HomeWork}
            background="#D8ECFF"
          />
          <RoundedCards
            text="Отчеты от учителей"
            img={Report}
            background="#E8CBFF"
          />
        </Box>
      </Box>
      <Box sx={theme.BottomCardsWrapper}>
        <Balance />
        <UpcomingLessons />
      </Box>
    </Box>
  );
};

export default Main;
