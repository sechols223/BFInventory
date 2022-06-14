/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';

import HomeScreen from './Screens/HomeScreen.js'
import InventoryScreen from './Screens/Inventory.js'
const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Welcome',
                        headerStyle: {
                            backgroundColor: '#9a7ad2'
                        }
                    }}
                />
                <Stack.Screen
                    name="Inventory"
                    component={InventoryScreen}
                    options={ {
                        title: 'Inventory',
                        headerStyle: {
                            backgroundColor: '#9a7ad2'
                        }
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
};


export default App;
