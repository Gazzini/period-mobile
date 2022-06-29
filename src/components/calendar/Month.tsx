import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { MonthWeekService } from '~/services/MonthWeekService';

import { DSText } from '../text/DSText';

import { Day } from './Day';
import { Week } from './Week';

interface MonthProps {
    date: Date;
}

const InnerMonth: React.FC<MonthProps> = ({ date }) => {
    // TODO: consider border offsets here
    const dimensions = Dimensions.get('screen');
    const dayWidth = dimensions.width / 7;

    const weeks = MonthWeekService.getWeeks(date);
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

export const Month = React.memo(InnerMonth);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    monthName: {
        textAlign: 'center'
    }
});