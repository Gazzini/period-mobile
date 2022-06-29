import React from 'react';

import { Month } from '~/components/calendar/Month';

// The home screen
export const HomeScreen: React.FC = () => {
    return <Month date={ new Date() } />;
};
