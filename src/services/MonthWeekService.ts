/// Helper function to get array of weeks in a given month (for displaying a calendar month view)
export namespace MonthWeekService {
    // Returns an array of arrays of numbers representing dates in a week.
    // Uses -1 for an out-of-month date in a week (because null is hard to map over)
    export const getWeeksForMonthsView = (monthDate: Date): (number)[][] => {
        const firstDateInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
        const lastDateInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);

        const monthFirstDayPosition = firstDateInMonth.getDay() % 7;
        const monthLastDay = lastDateInMonth.getDate() + monthFirstDayPosition;

        const numWeeks = Math.ceil(monthLastDay / 7);
        const lines: number[][] = new Array(numWeeks);

        let dayOfMonth = 1 - monthFirstDayPosition;

        for (let w = 0; w < numWeeks; w++) {
            const row: number[] = new Array(7);
            for (let d = 0; d < 7; d++) {
                if (isInCurrentMonth(dayOfMonth, lastDateInMonth.getDate())) {
                    row[d] = dayOfMonth;
                } else {
                    row[d] = -1;
                }
                dayOfMonth++;
            }
            lines[w] = row;
        }
        return lines;
        // Inspiration from here: https://github.com/krazylek/calendar-month-array/blob/master/index.js
        // Thanks @krazylek!!
    };

    // Returns an array of 7 numbers, with the dates from the most recent Sunday -> EOW
    export const getWeeksForWeekView = (anyDateInWeek: Date): number[] => {
        const daysSinceSunday = anyDateInWeek.getDay();   // Sunday is 0, Saturday is 6

        const mostRecentSunday = new Date(anyDateInWeek);
        mostRecentSunday.setDate(
            anyDateInWeek.getDate() - daysSinceSunday
        );

        const cursor = mostRecentSunday;
        const result: number[] = new Array(7);
        for (let i = 0; i < 7; i++) {
            result[i] = cursor.getDate();
            cursor.setDate(cursor.getDate() + 1);
        }

        return result;
    };

    const isInCurrentMonth = (dayOfMonth: number, lastDayOfMonth: number): boolean => {
        return (dayOfMonth > 0 && dayOfMonth <= lastDayOfMonth);
    };

    export const roundToDay = (date: Date) => {
        const p = 24 * 60 * 60 * 1000; // milliseconds in an hour
        return new Date(Math.round(date.getTime() / p) * p);
    };
}
