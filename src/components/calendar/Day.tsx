import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { DSText } from '../text/DSText';


interface DayProps {
    day: number;
    width: number;
    isWeekend: boolean;
    isHighlighted: boolean;
    handleSelection: (ts: number) => void;
    ts: number;
}

const InnerDay: React.FC<DayProps> = ({ day, width, isWeekend, isHighlighted, handleSelection, ts }) => {
    console.log('rendering day!!!!!!!!');
    let containerStyles = {
        ...styles.container,
        width,
        height: width
    };

    const onPress = () => {
        handleSelection(ts);
    };

    const highlightStyles = isHighlighted ? styles.highlighted : {};
    const innerViewStyles = {
        ...styles.innerView,
        ...highlightStyles
    };

    const dayText = day > 0 ? day : '';
    const dayType = isWeekend ? 'dateWeekend' : 'dateWeekday';

    return (
        <View style={ containerStyles }>
            <TouchableOpacity onPress={ onPress } style={ innerViewStyles }>
                <DSText type={ dayType } style={ styles.text }>
                    { dayText }
                </DSText>
            </TouchableOpacity >
        </View >
    );
};

export const Day = memo(InnerDay);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    innerView: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        borderRadius: 8
    },
    highlighted: {
        backgroundColor: '#D6243D'
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center'
    }
});