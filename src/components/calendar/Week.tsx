import React from 'react';
import { StyleSheet, View } from 'react-native';

import { HairlineSeparator } from '~/components/HairlineSeparator';

interface WeekProps {
    isLastWeek: boolean;
}

export const Week: React.FC<WeekProps> = ({ isLastWeek, children }) => {
    const weekDivider = isLastWeek ? null : <HairlineSeparator />;

    return <View style={ styles.container }>
        <>
            <View style={ styles.week }>
                <>
                    { children }
                </>
            </View>
            { weekDivider }
        </>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    week: {
        display: 'flex',
        flexDirection: 'row'
    }
});