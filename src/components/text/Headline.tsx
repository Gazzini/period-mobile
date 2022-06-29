import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

interface HeadlineProps {
    color?: string;
}

export const Headline: FunctionComponent<HeadlineProps> = ({ color, children }) => {
    return (
        <Text style={ StyleSheet.flatten([styles.headline, { color }]) }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    headline: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 17,
        lineHeight: 22
    }
});