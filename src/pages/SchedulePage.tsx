import { Box } from "@mui/material";
import CustomSelect from "../components/UI/CustomSelect/CustomSelect";
import CustomButton from "../components/UI/Button/CustomButton";

import ScheduleHeader from "../components/ScheduleHeader/ScheduleHeader";
import Schedule from "../components/Schedule/Schedule";

import * as theme from "./SchedulePageThemes";

const SchedulePage = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <Box sx={theme.SchedulePageWrapper}>
      <Box sx={theme.TopContentWrapper}>
        <CustomSelect />
        <CustomButton
          handleClick={handleClick}
          maxWidth="344px"
          height="40px"
          variant="contained"
          style="LightPurple"
          textVariant="Headline"
          text="Изменить расписание"
          disableRipple
        />
      </Box>
      <ScheduleHeader />
      <Schedule />
    </Box>
  );
};

export default SchedulePage;
