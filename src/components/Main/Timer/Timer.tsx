import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import * as theme from "./TimerThemes";
import CustomButton from "../../UI/Button/CustomButton";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const currentTime = new Date();
    const endOfTimer = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate() + (6 - currentTime.getDay()),
      23,
      59,
      59
    );
    const difference = endOfTimer.getTime() - currentTime.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const handleClick = () => {
    console.log("click");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const timeUnits = [
    { unit: "Д", value: timeLeft.days },
    { unit: "ч", value: timeLeft.hours },
    { unit: "мин", value: timeLeft.minutes },
  ];
  return (
    <Box sx={theme.TimerWrapper}>
      <Typography sx={theme.NextLessonText} variant="h4">
        Следующее занятие начнется через:
      </Typography>
      <Box sx={theme.TimerTextWrapper}>
        {timeUnits.map(({ unit, value }) => (
          <Typography sx={theme.TimeTex} key={unit}>
            {value}
            <Typography sx={theme.SpanText} component="span">
              {unit}
            </Typography>
          </Typography>
        ))}
      </Box>
      <CustomButton
        text="Button"
        variant="outlined"
        textVariant="black16"
        handleClick={handleClick}
        maxWidth="220px"
        height="48px"
        style="dotted"
      />
    </Box>
  );
};

export default Timer;
