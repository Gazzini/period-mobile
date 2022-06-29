import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { ActiveWeekHeader } from './components/ActiveWeekHeader';
import { InsightsContent } from './components/insights-content/InsightsContent';

export const HomeScreen = (): JSX.Element => {
    return (
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <ActiveWeekHeader />
                <InsightsContent />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

    }
});