import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HairlineSeparator } from '~/components/HairlineSeparator';

interface PaddedDetailRowProps {
    title: string; // maybe component?
    body: any; // maybe children?
}

/**
 *
 *              PaddedDetailRow
 *                  title
 *                      👁 Pregnancy Chance
 *                      See All >
 *                  body
 *                      74% with wave
 *              PaddedDetailRow
 *                  title
 *                      🗓 Cycle History
 *                      See All >
 *                  body
 *                      15 days
 *                      Started...
 */
export const PaddedDetailRow: FunctionComponent<PaddedDetailRowProps> = ({ title, body }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.titleContainer }>
                <Text>{ title }</Text>
                <Text>See All { `>` } </Text>
            </View>
            <HairlineSeparator />
            <View>
                { body }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16
    },
    titleContainer: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 12,
        justifyContent: 'space-between'
    }
});
