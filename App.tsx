import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Calendar } from './src/components/calendar/Calendar';

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <Calendar />
        </View>
    );
}