import { Box, Divider, Typography } from "@mui/material";
import CustomButton from "../../UI/Button/CustomButton";
import MainRoundedBorderBox from "../../UI/MainRoundedBorderBox/MainRoundedBorderBox";
import MainRoundedBorderBoxTitle from "../../UI/MainRoundedBorderBox/MainRoundedBorderBoxTitle";
import MainRoundedBorderBoxSubtitle from "../../UI/MainRoundedBorderBox/MainRoundedBorderBoxSubtitle";
import Teacher from "../../../assets/TeacherIcon.svg";
import * as theme from "./UpcomingLessonsThemes";
const UpLessArr = [
  {
    num: "1",
    date: "мая",
    lesson: "Ментальная Арифметика",
    time: "14:00-14:25",
    img: Teacher,
    name: "Белкина Инна",
  },
  {
    num: "30",
    date: "октября",
    lesson: "Программирование",
    time: "11:00-11:11",
    img: Teacher,
    name: "Животновская Оксана",
  },
  {
    num: "16",
    date: "ноября",
    lesson: "Скорочтение",
    time: "09:00-09:45",
    img: Teacher,
    name: "Мин Елена",
  },
];
const UpcomingLessons = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <MainRoundedBorderBox width="708px" height="372px">
      <MainRoundedBorderBoxTitle marginBottom="22px">
        Ближайшие уроки
      </MainRoundedBorderBoxTitle>
      <Box sx={theme.MiddleContetnWrapper}>
        {UpLessArr.map((e, i) => (
          <Box key={i}>
            <Box sx={theme.ItemWrapper}>
              <Box sx={theme.DateWrapper}>
                <Typography sx={theme.Num} variant="h2">
                  {e.num}
                </Typography>
                <Typography sx={theme.Date}>{e.date}</Typography>
              </Box>
              <Box sx={theme.lesson}>
                <MainRoundedBorderBoxSubtitle>
                  {e.lesson}
                </MainRoundedBorderBoxSubtitle>
              </Box>
              <Typography sx={theme.Time}>{e.time}</Typography>
              <img src={Teacher} alt="TeacherIco" style={theme.img} />
              <Typography sx={theme.Name}>{e.name}</Typography>
              <Box sx={theme.buttonsWrapper}>
                <CustomButton
                  variant="outlined"
                  style="outlined"
                  text="Button"
                  handleClick={handleClick}
                  width="56px"
                  height="32px"
                  textVariant="regular12"
                />
                <CustomButton
                  variant="contained"
                  style="contained"
                  text="Button"
                  handleClick={handleClick}
                  width="56px"
                  height="32px"
                  textVariant="regular12"
                />
              </Box>
            </Box>
            <Divider sx={theme.Divider} />
          </Box>
        ))}
      </Box>

      <Box sx={theme.buttonWrapper}>
        <CustomButton
          variant="contained"
          style="contained"
          text="Button"
          handleClick={handleClick}
          width="344px"
          height="40px"
          textVariant="black16"
        />
      </Box>
    </MainRoundedBorderBox>
  );
};

export default UpcomingLessons;
