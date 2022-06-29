import React, { FunctionComponent, useCallback } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';

import { Day } from '~/components/calendar/Day';

import { MonthWeekService } from '~/services/MonthWeekService';

/**
 * horizonal scrolly bit
 */
export const CurrentWeekSummary: FunctionComponent = () => {
    const currentDate = new Date();
    const days = MonthWeekService.getWeeksForWeekView(currentDate);

    const dimensions = Dimensions.get('screen');
    // TODO: consider border offsets here
    const dayWidth = dimensions.width / 7;
    const renderDay = useCallback((date: number, weekday: number) => {
        const isWeekend = weekday === 0 || weekday === 6;
        return <Day
            day={ date }
            isWeekend={ isWeekend }
            width={ dayWidth } />;
    }, [dayWidth]);

    return (
        <FlatList
            data={ days }
            renderItem={ ({ item, index }) => renderDay(item, index) }
            horizontal
            pagingEnabled
        />
    );
};

const styles = StyleSheet.create({

});
