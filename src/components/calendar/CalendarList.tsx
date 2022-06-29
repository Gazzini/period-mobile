import React, { useState } from 'react';

import { useCallback } from 'react';
import { FlatList } from 'react-native';

import { MonthWeekService } from '~/services/MonthWeekService';

import { Month } from './Month';

const numberOfMonthsInCalendar = 10;

export const CalendarList: React.FC = () => {

    const [highlightedDayTS, setHighlightedDayTS] = useState<number | null>(null);
    console.log('Highlighted day:');
    console.log(highlightedDayTS);

    const months = useCallback(() => {
        // Go backwards
        const date = MonthWeekService.roundToDay(new Date());
        date.setMonth(date.getMonth() - (numberOfMonthsInCalendar / 2));

        // Work forwards
        const result: Date[] = new Array(numberOfMonthsInCalendar);
        for (let i = 0; i < numberOfMonthsInCalendar; i++) {
            result[i] = new Date(date);
            date.setMonth(date.getMonth() + 1);
        }
        return result;
    }, [])();

    // Start in middle
    const initialIndex = Math.floor(numberOfMonthsInCalendar / 2);

    return (
        <FlatList
            data={ months }
            renderItem={ ({ item }) => <Month
                date={ item }
                handleSelection={ setHighlightedDayTS }
                selectedTS={ highlightedDayTS } />
            }
            initialScrollIndex={ initialIndex }
        />
    );
};