import * as React from "react";
import {View, Button, TextInput, Text, StyleSheet} from "react-native";


export default function Create(props) {

    const [name, setName] = React.useState('');
    const [nameError, setNameError] = React.useState('');

    const [description, setDescription] = React.useState('');
    const [descriptionError, setDescriptionError] = React.useState('');

    const [count, setCount] = React.useState('');
    const [countError, setCountError] = React.useState('');


    const validateAndAdd = () => {
        let nameValid = false;
        if (name.length === 0){
            setNameError("Name is required!")
        } else {
            setNameError("");
            nameValid= true;
        }

        let descriptionValid = false;
        if (description.length <= 9){
            setDescriptionError("Description should be minimum 10 characters!")
        } else {
            setDescriptionError("");
            descriptionValid = true;
        }

        let countValid = false
        if (isNaN(parseInt(count)) ){
            setCountError("You should give a valid number!")
        } else {
            setCountError("")
            countValid = true;
        }

        if(nameValid && descriptionValid && countValid){
            alert("Food added")
            addFood()
            setName("")
            setCount("")
            setDescription("")
            // navigation.navigate('Read') not working properly :(
        }
    }


    const addFood = () => {
        props.addNewFood({
            id: props.foods[props.foods.length-1].id + 1,
            name,
            description,
            count
        })
    }


    const styling = StyleSheet.create({
        invalid: {
            color: "red"
        },
        input: {
            width: 350,
            borderColor: "darkgrey",
            borderWidth: "thin",
            margin: 10
        }
    })


    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput placeholder='e.g. Hamburger'
                   onChangeText={newName => setName(newName)}
                   value={name}
                   style={styling.input}
            ></TextInput>
            {nameError.length > 0 &&
            <Text style={styling.invalid}>{nameError}</Text>
            }
            <TextInput placeholder='e. g. This is a delicious grilled meal made out of fish.'
                   onChangeText={newDescription => setDescription(newDescription)}
                   value={description}
                   style={styling.input}
            ></TextInput>
            {descriptionError.length > 0 &&
            <Text style={styling.invalid}>{descriptionError}</Text>
            }
            <TextInput placeholder='e.g. 2'
                   keyboardType={'numeric'}
                   onChangeText={newCount => setCount(newCount)}
                   value={count}
                   style={styling.input}
            ></TextInput>
            {countError.length > 0 &&
            <Text style={styling.invalid}>{countError}</Text>
            }
            <Button title={'Add food'} onPress={validateAndAdd}></Button>
        </View>
    );

}