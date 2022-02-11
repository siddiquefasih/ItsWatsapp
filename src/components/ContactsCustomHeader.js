import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const ContactCustomHeader = (ContactScreenProps) => {

    console.log(ContactScreenProps,"CustomHeaderPropsssss");

    return (
        <View style={{ backgroundColor: "#aa0027", padding: 15, flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity>
                    <Ionicons
                        name="menu-outline"
                        size={24}
                        color="white"
                        onPress={() => ContactScreenProps.navigation.openDrawer()}
                    />
                </TouchableOpacity>
                
                <Text style={{ marginStart: 15, textAlign: "center", color: "white", fontSize: 16 }}>{ContactScreenProps.heading}</Text>

            </View>

            {/* <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: "center", color: "#fff", fontSize: 14 }}>Go Online</Text>
            </View> */}

        </View>
    )
}

export default ContactCustomHeader; 
