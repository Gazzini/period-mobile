import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';

import { FontLoader } from '~/components/FontLoader';

import { Calendar } from './src/components/calendar/Calendar';

const app: React.FC = () => {
    return (
        <FontLoader>
            <NavigationContainer>
                <SafeAreaView>
                    <Calendar />
                </SafeAreaView>
            </NavigationContainer>
        </FontLoader>
    );
};

export default app;
