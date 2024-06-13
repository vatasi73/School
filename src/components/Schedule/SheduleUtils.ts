import { LessonInfo } from "./Schedule";

export function getLessonStyles(
  info: LessonInfo,
  isToday: boolean,
  currentHour: number
): { borderColor: string; backgroundColor: string } {
  let borderColor = "#22782B";
  let backgroundColor = "inherit";

  if (info.lessonStatus === "canceled") {
    borderColor = "#79747F";
  } else if (info.notpaid) {
    borderColor = "#E12828";
  }

  const lessonHour = parseInt(info.time.split(":")[0], 10);
  if (isToday && lessonHour === currentHour) {
    borderColor = "#DECFFF";
    backgroundColor = "#EEEEFF";
  } else if (isToday && lessonHour > currentHour) {
    borderColor = "#C8C5CD";
    backgroundColor = "#F5F5F5";
  }

  return { borderColor, backgroundColor };
}

export const generateCalendarDates = (currentMonth: Date) => {
  const calendarDates = [];
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const startingDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
  let dayCounter = -startingDayOfWeek;

  for (let i = 0; i < 35; i++) {
    const day = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      dayCounter + 1
    );
    calendarDates.push(day);
    dayCounter++;
  }

  return calendarDates;
};

export const getMonthNameWithCorrectEnding = (date: Date) => {
  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return monthNames[date.getMonth()];
};
