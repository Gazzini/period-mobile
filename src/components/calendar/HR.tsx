import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HR: React.FC = () => {
    return <View style={ styles.hr } />;
};

const styles = StyleSheet.create({
    hr: {
        backgroundColor: '#E2E9E9',
        height: 1,
        width: '100%'
    }
});