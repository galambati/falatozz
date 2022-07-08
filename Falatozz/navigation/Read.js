import * as React from "react";
import {ScrollView, View} from "react-native";
import ItemList from "./Item";


export default function Read(props) {
    return(
        <ScrollView>
            <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                <ItemList openUpdateComponent={props.openUpdateComponent} deleteFood={props.deleteFood} foods={props.foods}/>
            </View>
        </ScrollView>
    );
}