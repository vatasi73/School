import { Box, Divider, Typography } from "@mui/material";
import MainRoundedBorderBox from "../../UI/MainRoundedBorderBox/MainRoundedBorderBox";
import MainRoundedBorderBoxSubtitle from "../../UI/MainRoundedBorderBox/MainRoundedBorderBoxSubtitle";
import MainRoundedBorderBoxTitle from "../../UI/MainRoundedBorderBox/MainRoundedBorderBoxTitle";
import CustomButton from "../../UI/Button/CustomButton";
import * as theme from "./BalanceThemes";
const BalanceArr = [
  { title: "Ментальная Арифметика", count: "32" },
  { title: "Программирование", count: "0" },
  { title: "Скорочтение", count: "4" },
  { title: "Скорочтение", count: "4" },
  { title: "Скорочтение", count: "4" },
];
const Balance = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <MainRoundedBorderBox width="344px" height="372px">
      <MainRoundedBorderBoxTitle marginBottom="25px">
        Баланс занятий
      </MainRoundedBorderBoxTitle>
      <Box sx={theme.BalanceContentWrapper}>
        {BalanceArr.map((e, i) => (
          <Box key={i}>
            <Box sx={theme.BalanceInnerContentWrapper}>
              <MainRoundedBorderBoxSubtitle>
                {e.title}
              </MainRoundedBorderBoxSubtitle>
              <Box sx={theme.CountWrapper}>
                <Typography sx={theme.CountText}>{e.count}</Typography>
              </Box>
            </Box>
            <Divider sx={theme.Divider} />
          </Box>
        ))}
      </Box>
      <CustomButton
        variant="contained"
        style="contained"
        text="Button"
        handleClick={handleClick}
        width="288px"
        height="40px"
        textVariant="black16"
      />
    </MainRoundedBorderBox>
  );
};

export default Balance;
