import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { MonthWeekService } from '../../services/MonthWeekService';

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {

    const date = new Date();
    const weeks = MonthWeekService.getWeeks(date);
    console.log(JSON.stringify(weeks, undefined, 2));
    const monthName = date.toLocaleString('default', { month: 'long' });

    const weekComponents = weeks.map((w, wi) => {
        console.log(JSON.stringify(w));
        const dayComponents = w.map((d, di) => {
            console.log(d);
            if (!d) {
                console.log('aaahhh');
                return <Text key={di}>{`asdlkfjasdfk`}</Text>;
            } else {
                return <Text key={di}>{d}</Text>
            }
        })
        return <View style={styles.week} key={wi}>{dayComponents}</View>
    });


    return (
        <View style={styles.container}>
        <Text>{ monthName }</Text>
        {weekComponents}
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        
    },
    week: {
        display: 'flex',
        flexDirection: 'row',
    }
});