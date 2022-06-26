/// Helper function to get array of weeks in a given month (for displaying a calendar month view)
export namespace MonthWeekService {
    export const getWeeks = (monthDate: Date): (string)[][] => {
        const firstDateInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
        const lastDateInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);

        const monthFirstDayPosition = firstDateInMonth.getDay() % 7;
        const monthLastDay =  lastDateInMonth.getDate() + monthFirstDayPosition;

        const numWeeks = Math.ceil(monthLastDay / 7);
        const lines: (string)[][] = new Array(numWeeks);

        let dayOfMonth = 1 - monthFirstDayPosition

        for (let w = 0; w < numWeeks; w++) {
            const row: string[] = new Array(7);
            for (let d = 0; d < 7; d++) {
                if (isInCurrentMonth(dayOfMonth, lastDateInMonth.getDate())) {
                    row[d] = `${dayOfMonth}`;
                } else {
                    row[d] = `-`;
                }
                dayOfMonth++
            }
            lines[w] = row;
        }
        return lines;
    };

    const isInCurrentMonth = (dayOfMonth: number, lastDayOfMonth: number): boolean => {
        return (dayOfMonth > 0 && dayOfMonth <= lastDayOfMonth);
    }
    
    const changeDate = (date: Date, dayOfMonth: number): Date => {
        const newDate = new Date(date);
        newDate.setDate(dayOfMonth);
        return newDate
    }
}
// Inspiration from here: https://github.com/krazylek/calendar-month-array/blob/master/index.js
// Thanks @krazylek!!
