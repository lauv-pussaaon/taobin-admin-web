import { parseISO, format, parse } from "date-fns";

export function formatDateString(dateStr, formatStr = "d MMMM yyyy") {
    const date = parseISO(dateStr);
    const formattedDate = format(date, formatStr);

    return formattedDate;
}

export function formatTimeString(timeStr, formatStr = "HH:mm") {
    const time = parse(timeStr, "HH:mm:ss", new Date());
    const formattedTime = format(time, formatStr);

    return formattedTime;
}
