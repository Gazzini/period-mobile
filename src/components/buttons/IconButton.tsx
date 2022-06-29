import React, { FunctionComponent } from 'react';
import { Image, ImageURISource, StyleSheet, Text, View } from 'react-native';

interface IconButtonProps {
    icon: ImageURISource;
    title: string;
}

/** */
export const IconButton: FunctionComponent<IconButtonProps> = ({ icon, title }) => {
    return (
        <View style={ styles.buttonContainer }>
            <Image source={ icon } />
            <Text>{ title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {},
    icon: {
        height: 15,
        width: 15
    },
    title: {

    }
});