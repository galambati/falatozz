import * as React from "react";
import {View, Button, TextInput} from "react-native";


export default function Create(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [count, setCount] = React.useState('');

    const addFood = () => {
        props.addNewFood({
            id: props.foods[props.foods.length-1].id + 1,
            name,
            description,
            count
        })
    }
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput placeholder='e.g. Hamburger'
                   errorStyle={{color: 'red'}}
                   errorMessage='Please enter a valid name!'
                   onChangeText={(newName) => setName(newName)}
            ></TextInput>
            <TextInput placeholder='e. g. This is a delicious grilled meal made out of fish.'
                   errorStyle={{color: 'red'}}
                   errorMessage='Please fill out this!'
                   onChangeText={(newDescription ) => setDescription(newDescription)}
            ></TextInput>
            <TextInput placeholder='e.g. 2'
                   keyboardType={'numeric'}
                   errorStyle={{color: 'red'}}
                   errorMessage='Please enter a valid number!'
                   onChangeText={(newCount) => setCount(newCount)}
            ></TextInput>
            <Button title={'Add food'} onPress={addFood}></Button>
        </View>
    );
}