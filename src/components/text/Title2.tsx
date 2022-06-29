import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

export interface Title2Props extends TextStyle {
    type: 'bold' | 'bold-rounded';
    color?: string;
}

export const Title2: FunctionComponent<Title2Props> = ({ type, color, children }) => {
    const textStyles = type === 'bold'
        ? styles.titleBold
        : styles.titleBoldRounded;

    return (
        <Text style={ StyleSheet.flatten([textStyles, { color }]) }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    titleBold: {
        fontFamily: 'SF-Pro-Display-Bold',
        fontSize: 22,
        lineHeight: 28
    },
    titleBoldRounded: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 22,
        linHeight: 22
    }
});