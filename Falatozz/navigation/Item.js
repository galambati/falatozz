import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';



const ItemList = (props) => {
    return(
        props.foods.map((f, i) => {
            return (
                <View key={i}>
                    <Card containerStyle={{
                        backgroundColor: 'orange',
                        margin: 10,
                        borderColor: '#ff9900',
                        borderRadius: 10,
                        elevation: 50,
                        width: 350
                    }}>
                        <Card.Title>
                            <Text>{f.name}</Text>
                        </Card.Title>
                        <Text style={styles.text}>{f.description}</Text>
                        <View style={styles.innerCardContainer}>
                            <Ionicons name="create-outline" size={30}></Ionicons>
                            <Text style={styles.text}>{f.count}</Text>
                            <Ionicons name="trash-outline" size={30}></Ionicons>
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