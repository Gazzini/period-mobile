import React from 'react';
import { SafeAreaView } from 'react-native';

import { Calendar } from '~/components/calendar/Calendar';

// The home screen
export const CalendarScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <Calendar />
        </SafeAreaView>
    );
};
