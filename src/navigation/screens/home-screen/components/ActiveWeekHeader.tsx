import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HairlineSeparator } from '~/components/HairlineSeparator';

import { CurrentWeekSummary } from './CurrentWeekSummary';

/**
 *            header
 *              CurrentWeek - horizontal scroll
 *              CurrentDayTitle - horizontal
 *                  Your Cycle (subtitle) / Current Week (title)
 *                  LogPeriodButton
 */
export const ActiveWeekHeader: FunctionComponent<{}> = () => {
    return (
        <View style={ styles.container }>
            <CurrentWeekSummary />
            <HairlineSeparator />
            <View style={ styles.yourPeriodContainer }>
                <View>
                    <Text>Your Cycle</Text>
                    <Text>Jul 20 - Aug 15</Text>
                </View>
                <Text>log period</Text>
            </View>
            <HairlineSeparator />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.93)'
    },
    yourPeriodContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});