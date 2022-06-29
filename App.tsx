import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { CalendarList } from '~/components/calendar/CalendarList';

import { FontLoader } from '~/components/FontLoader';

const app: React.FC = () => {
    return (
        <FontLoader>
            <NavigationContainer>
                <SafeAreaView>
                    <CalendarList />
                </SafeAreaView>
            </NavigationContainer>
        </FontLoader>
    );
};

export default app;
