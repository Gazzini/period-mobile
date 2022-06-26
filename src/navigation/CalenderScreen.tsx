import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen } from '~/navigation/HomeScreen';

export const CalendarScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>CalendarScreen</Text>
            <HomeScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
});