
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Calendar } from '~/components/calendar/Calendar';

export function AppNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Calendar />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
});