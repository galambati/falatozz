import * as React from "react";
import {ScrollView, View} from "react-native";
import ItemList from "./Item";

export default function Read() {
    return(
        <ScrollView>
            <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                <ItemList/>
            </View>
        </ScrollView>
    );
}