import React from 'react';
import { Text, View } from 'react-native';

import { PaddedDetailRow } from './PaddedDetailRow';

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
export const CycleHistoryRow = (): JSX.Element => {
    return (
        <PaddedDetailRow
            title={ 'Cycle History' }
            body={ <View><Text>hello world</Text></View> }/>
    );
};