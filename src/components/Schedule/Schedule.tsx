import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentDay } from "../GlobalFuture/GlobalFutureSelector";
import { classTime, daysOfWeek } from "../GlobalFuture/Arrs";
import * as theme from "./ScheduleTheme";

import { useMemo } from "react";
import {
  generateCalendarDates,
  getLessonStyles,
  getMonthNameWithCorrectEnding,
} from "./SheduleUtils";
import SheduleLessonInfo from "./SheduleLessonInfo";

export interface LessonInfo {
  time: string;
  lessonName: string;
  lessonStatus?: string;
  notpaid?: boolean | undefined;
}

interface Lesson {
  date: string;
  lessonInfo: LessonInfo[];
}

const Schedule = () => {
  const currentMonth = useSelector(selectCurrentDay);
  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const calendarDates = generateCalendarDates(currentMonth);

  const renderLessonInfo = (
    dayValue: Date,
    lessons: Lesson[]
  ): JSX.Element[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentHour = new Date().getHours();

    const lessonsForDay = lessons.filter(
      (lesson) =>
        new Date(lesson.date).toDateString() === dayValue.toDateString()
    );

    return lessonsForDay.map((lesson, index) => {
      const lessonDate = new Date(lesson.date);
      lessonDate.setHours(0, 0, 0, 0);

      const isFuture = lessonDate > today;
      const isToday = lessonDate.toDateString() === today.toDateString();

      return (
        <Box key={index} sx={theme.LessonsWrapper}>
          {lesson.lessonInfo.map((info, lessonIndex) => {
            const { borderColor, backgroundColor } = getLessonStyles(
              info,
              isToday,
              currentHour
            );

            return (
              <SheduleLessonInfo
                key={lessonIndex}
                isFuture={isFuture}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                info={info}
              />
            );
          })}
        </Box>
      );
    });
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {daysOfWeek.map((day) => (
            <TableCell key={day} sx={theme.HeadTableCell}>
              {day}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {[...Array(5)].map((_, weekIndex) => (
          <TableRow key={weekIndex} sx={theme.TableRow}>
            {daysOfWeek.map((_, dayIndex) => {
              const cellIndex = weekIndex * 7 + dayIndex;
              const dayValue = calendarDates[cellIndex];
              return (
                <TableCell key={dayIndex} sx={theme.BodyTableCell}>
                  <Typography
                    sx={[
                      theme.Date,
                      {
                        color:
                          dayValue.getMonth() === currentMonth.getMonth()
                            ? "#323854"
                            : "#C8C5CD",
                      },
                    ]}
                  >
                    {dayValue.getDate()}
                    {dayValue.getDate() === today.getDate() &&
                    dayValue.getMonth() === today.getMonth() &&
                    dayValue.getFullYear() === today.getFullYear()
                      ? ` ${getMonthNameWithCorrectEnding(dayValue)}`
                      : ""}
                  </Typography>
                  {renderLessonInfo(dayValue, classTime)}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Schedule;
