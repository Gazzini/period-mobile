import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { FontLoader } from '~/components/FontLoader';
import { CalendarScreen } from '~/navigation/screens/CalendarScreen';
import { HomeScreen } from '~/navigation/screens/home-screen/HomeScreen';

const Stack = createNativeStackNavigator();

const app: React.FC = () => {
    return (
        <FontLoader>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={ HomeScreen } options={ { title: 'Cycle Tracking' } } />
                    <Stack.Screen name="Calendar" component={ CalendarScreen } />
                </Stack.Navigator>
            </NavigationContainer>
        </FontLoader>
    );
};

export default app;
