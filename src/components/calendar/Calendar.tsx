import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { MonthWeekService } from '~/services/MonthWeekService';

import { DSText } from '../text/DSText';

import { Day } from './Day';
import { Week } from './Week';

interface CalendarProps { }

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
            const isWeekend = (di === 0) || (di === 6);
            return <Day isWeekend={ isWeekend } key={ di } width={ dayWidth } day={ d } />;
        });
        return <Week isLastWeek={ (wi === weeks.length - 1) } key={ wi }>{ dayComponents }</Week>;
    });

    return (
        <View style={ styles.container }>
            <DSText type="monthName" style={ styles.monthName }>{ monthName }</DSText>
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
        textAlign: 'center'
    }
});