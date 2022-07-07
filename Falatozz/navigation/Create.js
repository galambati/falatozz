import * as React from "react";
import {View, Text} from "react-native";

export default function Create({navigation}) {
    return(
        <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
            <Text
                onPress={() => navigation.navigate("Create")}
                style={{fontSize: 26, fontWeight: "bold"}}>Create</Text>
        </View>
    );
}