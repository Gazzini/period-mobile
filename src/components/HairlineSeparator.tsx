import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HairlineSeparator = (): JSX.Element => {
    return (
        <View style={ styles.separator } />
    );
};

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#E2E9E9'
    }
});
