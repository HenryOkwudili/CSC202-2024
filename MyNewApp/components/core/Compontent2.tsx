import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type Props = {
    name?:string;
}
const Component2: React.FC<Props>=({name = "Henry"})=>
    {
        return(
            <View>
                <Text>
                Hello <Text style={{ color: 'red' }}>{name}</Text>.
                 Greetings from Component2
                </Text>
            </View>
        );
    }

    export default Component2;