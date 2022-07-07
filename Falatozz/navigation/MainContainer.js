import * as React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Create from "./Create";
import Read from "./Read";

const readName = "Read";
const createName = "Create";
const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={readName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === readName) {
                            iconName = focused ? 'list' : 'home-outline'
                        } else if (rn === createName) {
                            iconName = focused ? 'add' : 'add-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    }
                })}>

                <Tab.Screen name={readName} component={Read}></Tab.Screen>
                <Tab.Screen name={createName} component={Create}></Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    );
}