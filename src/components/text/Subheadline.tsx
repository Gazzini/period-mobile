import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

export interface SubheadlineProps extends TextStyle {
    type: 'bold' | 'regular';
    color?: string;
}

export const Subheadline: FunctionComponent<SubheadlineProps> = ({ type, color, children }) => {
    const textStyles = type === 'bold'
        ? styles.bold
        : styles.regular;

    return (
        <Text style={ StyleSheet.flatten([textStyles, { color }]) }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    bold: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 15,
        lineHeight: 20
    },
    regular: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 15,
        linHeight: 20
    }
});