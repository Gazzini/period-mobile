import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface DayProps {
    day: number;
    width: number;
}

export const Day: React.FC<DayProps> = ({day, width}) => {
    const containerStyles = {
        ...styles.container,
        width,
        height: width
    };

    const dayText = day > 0 ? day : '';

    return <View style={containerStyles}>
        <Text style={styles.text}>
            {dayText}
        </Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center'
    },
    text: {
        fontSize: 34,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})