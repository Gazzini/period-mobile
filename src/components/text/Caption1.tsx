import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

export interface Caption1Props extends TextStyle {
    type: 'bold' | 'regular';
    rounded: boolean;
    color?: string;
}

export const Caption1: FunctionComponent<Caption1Props> = ({ type, rounded, children }) => {
    const textStyles = type === 'bold'
        ? rounded ? styles.roundedBold : styles.bold
        : rounded ? styles.roundedRegular : styles.regular;

    return (
        <Text style={ textStyles }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    bold: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 12,
        lineHeight: 16
    },
    regular: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 12,
        linHeight: 16
    },
    roundedBold: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 12,
        lineHeight: 12
    },
    roundedRegular: {
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: 12,
        lineHeight: 12
    }
});