import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Caption2Props {
    color?: string;
}

export const Caption2: FunctionComponent<Caption2Props> = ({ color, children }) => {
    return (
        <Text style={ StyleSheet.flatten([styles.bold, { color }]) }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    bold: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 11,
        lineHeight: 13
    }
});