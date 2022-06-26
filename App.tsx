import React from 'react';
import { Text, View } from 'react-native';

export default function App(): JSX.Element {
    return (
        <View style={{ backgroundColor: 'blue' }}>
            <Text style={{ paddingTop: 100, paddingLeft: 50, color: 'white' }}>
                hello world
            </Text>
        </View>
    );
}