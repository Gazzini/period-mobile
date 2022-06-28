import React from 'react';
import { StyleSheet, View } from 'react-native';

import { DSText } from '../text/DSText';

interface DayProps {
    day: number;
    width: number;
    isWeekend: boolean;
}

export const Day: React.FC<DayProps> = ({ day, width, isWeekend }) => {
    const containerStyles = {
        ...styles.container,
        width,
        height: width
    };

    const dayText = day > 0 ? day : '';
    const dayType = isWeekend ? 'dateWeekend' : 'dateWeekday';

    return <View style={ containerStyles }>
        <DSText type={ dayType } style={ styles.text }>
            { dayText }
        </DSText>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});