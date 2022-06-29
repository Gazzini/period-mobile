import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Headline } from '~/components/text/Headline';
import { Subheadline } from '~/components/text/Subheadline';
import { getCurrentDateFormatted } from '~/utils/DateUtil';

import { CycleHistoryRow } from './CycleHistoryRow';
import { PregnancyProbabilityRow } from './PregnancyProbabilityRow';

/**
 * Home screen contents including details about current cycle and historic cycles
 */
export const InsightsContent = (): JSX.Element => {
    return (
        <View style={ styles.container }>
            <View style={ styles.titleContainer }>
                <Headline color={ '#151616' }>Today's Insights</Headline>
                <Subheadline type={ 'bold' } color={ '#898E8E' }>{ getCurrentDateFormatted() }</Subheadline>
            </View>
            <PregnancyProbabilityRow />
            <View style={ styles.titleContainer }>
                <Headline color={ '#151616' }>Cycles</Headline>
            </View>
            <CycleHistoryRow />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F4F4',
        paddingHorizontal: 16
    },
    titleContainer: {
        paddingTop: 16,
        paddingBottom: 12
    }
});