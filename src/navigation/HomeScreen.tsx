import React from 'react';
import { Text, View } from 'react-native';

export const HomeScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        text: 'yellow'
    }
});