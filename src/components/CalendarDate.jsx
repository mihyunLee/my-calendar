import { format } from "date-fns";
import { useTheme } from "../context/themeProvider";
import { calendarDateTemplate, calendarDate } from "./CalendarDate.styles";

export default function CalendarDate({ date, isCurrentMonth, isToday }) {
  const [mode] = useTheme();

  return (
    <div css={calendarDateTemplate(isCurrentMonth, isToday, mode)}>
      <span css={calendarDate(isToday)}>{format(date, "d")}</span>
    </div>
  );
}
