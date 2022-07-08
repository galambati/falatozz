import * as React from "react";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import items from '../database/database.json';
import Create from "./Create";
import Read from "./Read";
import {useEffect} from "react";
import Update from "./Update";
import {View} from "react-native";

const foodsFromDb = items;
const readName = "Foods";
const createName = "Add";
const updateName = "Update";
const Tab = createBottomTabNavigator();


export default function MainContainer() {
    const [foods, setFoods] = React.useState(foodsFromDb);

    const addNewFood = (newFood) => {
        setFoods([...foods, newFood])
    }

    const deleteFood = (id) => {
        setFoods(foods.filter((food)=> food.id !== id))
    }

    const updateFood = (updatedFood) => {
        setFoods(foods.map((food)=> {
            if(food.id === updatedFood.id){
                return updatedFood;
            }
            return food;
        }))
    }

    const openUpdateComponent = (food) => {
        return (
            <View>
            <Tab.Screen name={updateName} children={() => <Update updateFood={updateFood} food={food}/>}></Tab.Screen>
            </View>
        )
    }

    useEffect(() => {

    }, [foods])

    return (
            <Tab.Navigator
                initialRouteName={readName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === readName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === createName) {
                            iconName = focused ? 'add' : 'add-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    }
                })}>

                <Tab.Screen name={readName} children={() => <Read openUpdateComponent={openUpdateComponent} deleteFood={deleteFood} foods={foods}/>}></Tab.Screen>
                <Tab.Screen name={createName} children={() => <Create foods={foods} addNewFood={addNewFood}/>}></Tab.Screen>

            </Tab.Navigator>
    );
}