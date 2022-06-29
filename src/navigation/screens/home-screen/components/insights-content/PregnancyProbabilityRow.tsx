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
 */
export const PregnancyProbabilityRow = (): JSX.Element => {
    return (
        <PaddedDetailRow
            title={ 'Pregnancy Chance' }
            body={ <View><Text>hello world</Text></View> }/>
    );
};