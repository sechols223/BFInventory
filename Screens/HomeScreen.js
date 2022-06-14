import * as React from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
    <View>
        <Button
            title="Inventory"
            onPress={() => navigation.navigate('Inventory')
            }
        />
    </View>
    )
}

export default HomeScreen;
