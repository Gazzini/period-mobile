import React from 'react';
import { StyleSheet, Text, TextInputProps } from 'react-native';


interface DSTextProps extends TextInputProps {
    type: 'monthName' | 'dateWeekday' | 'dateWeekend';
}

export const DSText: React.FC<DSTextProps> = (props) => {
    const { type, children, style, ...restProps } = props;
    const typeStyles = styles[type];
    // Preferences:
    // default styles
    // type styles
    // custom style-prop styles
    const textStyle = StyleSheet.flatten([{
        ...styles.default,
        ...typeStyles
    }, style]);

    return (
        <Text style={ textStyle } { ...restProps }>
            { children }
        </Text>
    );
};

const styles = StyleSheet.create({
    default: {
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: 20,
        lineHeight: 20,
        color: '#373939'
    },
    monthName: {
        fontFamily: 'SF-Pro-Rounded-Bold'
    },
    dateWeekday: {

    },
    dateWeekend: {
        color: '#898E8E'
    }
});