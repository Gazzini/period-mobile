import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

interface BodyProps {
    color?: string;
}

export const Body: FunctionComponent<BodyProps> = ({ color, children }) => {
    return (
        <Text style={ StyleSheet.flatten([styles.bodyText, { color }]) }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 16,
        lineHeight: 16
    }
});
