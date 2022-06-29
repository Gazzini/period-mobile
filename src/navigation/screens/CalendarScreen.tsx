import React from 'react';
import { SafeAreaView } from 'react-native';

import { CalendarList } from '~/components/calendar/CalendarList';

// The home screen
export const CalendarScreen: React.FC = () => {
    return (
        <SafeAreaView>
            <CalendarList />
        </SafeAreaView>
    );
};
