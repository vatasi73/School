import * as theme from "./ScheduleHeaderThemes";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Box, Typography } from "@mui/material";
import CustomButton from "../UI/Button/CustomButton";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { selectCurrentDay } from "../GlobalFuture/GlobalFutureSelector";
import { setCurrentDate } from "../GlobalFuture/GlobalFutureSlice";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
const ScheduleHeader = () => {
  const dispatch = useAppDispatch();
  const currentDate = useSelector(selectCurrentDay);

  const handlePrevious = () => {
    dispatch(
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
      )
    );
  };

  const handleNext = () => {
    dispatch(
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
      )
    );
  };
  const currentDayClick = () => {
    dispatch(setCurrentDate(new Date()));
  };

  const RUDate = new Intl.DateTimeFormat("ru", {
    month: "long",
    year: "numeric",
  })
    .formatToParts(currentDate)
    .map(({ type, value }) => {
      if (type === "month") {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
      return value;
    })
    .join("")
    .slice(0, -3);

  return (
    <Box sx={theme.ScheduleHeaderWrapper}>
      <Box sx={theme.arrowButtonWrapper}>
        <CustomButton
          maxWidth="10px"
          handleClick={handlePrevious}
          disableRipple
          variant="text"
          style="ArrowButtonShedule"
          textVariant="not"
        >
          <WestRoundedIcon sx={{ fontSize: "20px" }} />
        </CustomButton>
        <Typography sx={theme.Date}>{RUDate}</Typography>
        <CustomButton
          maxWidth="0px"
          handleClick={handleNext}
          disableRipple
          variant="text"
          style="ArrowButtonShedule"
          textVariant="not"
        >
          <EastRoundedIcon sx={theme.RoundedIcon} />
        </CustomButton>
      </Box>
      <Box sx={theme.buttonWrapper}>
        <CustomButton
          width="85px"
          height="32px"
          variant="outlined"
          style="outlined"
          text="Сегодня"
          textVariant="regular12"
          disableRipple
          handleClick={currentDayClick}
        />
        <HelpOutlineOutlinedIcon sx={theme.HelpOutlineOutlinedIcon} />
      </Box>
    </Box>
  );
};

export default ScheduleHeader;
