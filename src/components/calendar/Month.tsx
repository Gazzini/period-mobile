import * as React from 'react';
import { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import { MonthWeekService } from '~/services/MonthWeekService';

import { DSText } from '../text/DSText';

import { Day } from './Day';
import { Week } from './Week';

interface MonthProps {
    date: Date;
    handleSelection: (ts: number) => void;
    selectedTS: number | null;
}

const InnerMonth: React.FC<MonthProps> = ({ date, handleSelection, selectedTS }) => {

    const currentDate = MonthWeekService.roundToDay(date);

    const weekComponents = useMemo(() => {
        // TODO: consider border offsets here
        const dimensions = Dimensions.get('screen');
        const dayWidth = dimensions.width / 7;
        const weeks = MonthWeekService.getWeeksForMonthsView(currentDate);

        return weeks.map((w, wi) => {
            const dayComponents = w.map((d, di) => {
                const isWeekend = (di === 0) || (di === 6);
                const dayTS = (new Date(currentDate)).setDate(d);
                return <Day
                    isHighlighted={ (d > 0) && (selectedTS === dayTS) }
                    isWeekend={ isWeekend }
                    key={ di }
                    width={ dayWidth }
                    day={ d }
                    handleSelection={ handleSelection }
                    ts={ dayTS } />;
            });
            return <Week isLastWeek={ (wi === weeks.length - 1) } key={ wi }>{ dayComponents }</Week>;
        });
    }, [currentDate, selectedTS, handleSelection]);

    const monthName = currentDate.toLocaleString('default', { month: 'long' });

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