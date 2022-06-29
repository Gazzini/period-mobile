import React, { FunctionComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Title3Props {
    color?: string;
}

export const Title3: FunctionComponent<Title3Props> = ({ color, children }) => {
    return (
        <Text style={ StyleSheet.flatten([styles.title3Rounded, { color }]) }>{ children }</Text>
    );
};

const styles = StyleSheet.create({
    title3Rounded: {
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: 20,
        lineHeight: 20
    }
});