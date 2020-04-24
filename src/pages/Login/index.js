import React from 'react';
import {Text, View, Button} from 'react-native'

export default function Login({ navigation }) {
    return (
        <View>
            <Text>Login</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Apartamentos')}
            />
        </View>
    );
}