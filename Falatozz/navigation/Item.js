import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';


const foods = [
    {
        name: 'pizza',
        description: 'very tasty, very italian',
        count: 1
    }, {
        name: 'hamburger',
        description: 'best in the burger king',
        count: 2
    }, {
        name: 'gyros',
        description: 'albanian is an absolute banger',
        count: 4
    }, {
        name: 'gulyas soup',
        description: 'hungarian soup',
        count: 100
    }, {
        name: 'sushi',
        description: 'straight from japan',
        count: 43
    }, {
        name: 'ham & eggs',
        description: 'perfect for breakfast',
        count: 16
    }, {
        name: 'grilled salmon',
        description: 'grilled fish from the ocean',
        count: 7
    }, {
        name: 'french fries',
        description: 'potato is always a good choice',
        count: 8
    }]


const ItemList = () => {
    return(
        foods.map((f, i) => {
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
                        <Text style={styles.text}>{f.count}</Text>
                    </Card>
                </View>
            );
        })
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    }
})

export default ItemList;