import React from "react";
import { Text, View,TouchableOpacity } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"


const CustomHeader = ({ heading ,navigation}) => {
    return (
        <View style={{ backgroundColor: "#B71C1C", padding: 15, flexDirection: "row" }}>
            <TouchableOpacity>
                <Ionicons
                    name="menu-outline"
                    size={24}
                    color="white"
                    onPress={() => navigation.openDrawer()}
                />
            </TouchableOpacity>
            <Text style={{ marginStart: 15, textAlign: "center", color: "white", fontSize: 18 }}>{heading}</Text></View>
    )
}
export default CustomHeader
