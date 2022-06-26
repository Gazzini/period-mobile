import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { MonthWeekService } from '~/services/MonthWeekService';

import { Day } from './Day';

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {

    const dimensions = Dimensions.get('screen');
    // TODO: consider border offsets here
    const dayWidth = dimensions.width / 7;

    const date = new Date();
    const weeks = MonthWeekService.getWeeks(date);
    console.log(JSON.stringify(weeks, undefined, 2));
    const monthName = date.toLocaleString('default', { month: 'long' });

    const weekComponents = weeks.map((w, wi) => {
        const dayComponents = w.map((d, di) => {
            return <Day key={di} width={dayWidth} day={d} />;
        });
        return <View style={styles.week} key={wi}>{ dayComponents }</View>;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.monthName}>{ monthName }</Text>
            { weekComponents }
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    monthName: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900'
    },
    week: {
        display: 'flex',
        flexDirection: 'row'
    }
});