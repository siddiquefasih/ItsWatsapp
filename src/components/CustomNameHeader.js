import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const CustomNameHeader = (props) => {

    return (
        <View style={{ backgroundColor: "#aa0027", padding: 25, flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row" }}>

                {/* <TouchableOpacity>
                    <Ionicons
                        name="menu-outline"
                        size={24}
                        color="black"
                        onPress={() => props.navigation.openDrawer()}
                    />
                </TouchableOpacity>
                 */}
                <Text style={{ marginStart: 15, textAlign: "center", color: "white", fontSize: 16 }}>{props.heading}</Text>

            </View>

        </View>
    )
}


export default CustomNameHeader; 
