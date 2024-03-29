import { parseISO, format, parse, subDays } from "date-fns";

export const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

export function formatDateString(dateStr, formatStr = "d MMMM yyyy") {
    if (!dateStr) return null;

    const date = parseISO(dateStr);
    const formattedDate = format(date, formatStr);

    return formattedDate;
}

export function formatTimeString(timeStr, formatStr = "HH:mm") {
    if (!timeStr) return null;

    const time = parse(timeStr, "HH:mm:ss", new Date());
    const formattedTime = format(time, formatStr);

    return formattedTime;
}

export function getTodayString() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0
    let dd = today.getDate();

    // Add leading zeros to month and day if needed
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = yyyy + "-" + mm + "-" + dd;
    return formattedToday;
}

export function generateTimeOptions() {
    const timeOptions = [];
    for (let hour = 0; hour < 24; hour++) {
        // Pad the hour to ensure it's always two digits
        const paddedHour = hour.toString().padStart(2, "0");

        // Add both the hour and the half-hour mark
        timeOptions.push({
            label: `${paddedHour}:00`,
            value: `${paddedHour}:00`,
        });
        timeOptions.push({
            label: `${paddedHour}:30`,
            value: `${paddedHour}:30`,
        });
    }
    return timeOptions;
}

export const getYesterday = function () {
    const today = new Date();
    const yesterday = subDays(today, 1);
    return format(yesterday, "yyyy-MM-dd");
};
