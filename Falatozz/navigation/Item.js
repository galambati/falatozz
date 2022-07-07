import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';



const ItemList = (props) => {
    return(
        props.foods.map((food, index) => {
            return (
                <View key={index}>
                    <Card containerStyle={{
                        backgroundColor: 'orange',
                        margin: 10,
                        borderColor: '#ff9900',
                        borderRadius: 10,
                        elevation: 50,
                        width: 350
                    }}>
                        <Card.Title>
                            <Text>{food.name}</Text>
                        </Card.Title>
                        <Text style={styles.text}>{food.description}</Text>
                        <View style={styles.innerCardContainer}>
                            <Ionicons name="create-outline" size={30}></Ionicons>
                            <Text style={styles.text}>{food.count}</Text>
                            <Ionicons name="trash-outline" size={30} onPress={()=>{props.deleteFood(food.id)}}></Ionicons>
                        </View>
                    </Card>
                </View>
            );
        })
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    },
    innerCardContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default ItemList;