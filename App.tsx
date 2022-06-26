import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';

import { Calendar } from './src/components/calendar/Calendar';

const app: React.FC = () => {
  return (
    <NavigationContainer>
        <View>
          <Calendar />
        </View>
        </NavigationContainer>
    );
};

export default app;
