
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CalendarList } from '~/components/calendar/CalendarList';

export function AppNavigator(): JSX.Element {
    return (
        <NavigationContainer>
            <View style={ styles.container }>
                <StatusBar style="auto" />
                <CalendarList />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
});
