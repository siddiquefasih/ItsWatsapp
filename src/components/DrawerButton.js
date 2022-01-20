import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const DrawerButon = ({ heading, iconType, navigate }) => {

    const renderIcon = () => {
        if (iconType == "dashboard") {
            return (
                <MaterialCommunityIcons
                    name="view-dashboard-outline"
                    size={24}
                    color="black"
                />
            )
        }
        if (iconType == "chat") {
            return (
                <MaterialCommunityIcons
                    name="message-text-outline"
                    size={24}
                    color="black"
                />
            )
        }

        if (iconType == "assest") {
            return (
                <MaterialIcons
                    name="assessment"
                    size={24}
                    color="black"

                />
            )
        }

        if (iconType == "contact") {
            return (
                <AntDesign
                    name="contacts"
                    size={24}
                    color="black"
                />
            )
        }

        if (iconType == "setting") {
            return (
                <Feather
                    name="settings"
                    size={24}
                    color="black"
                />
            )
        }
    }

    return (
        <View style={{ marginStart: 15, flexDirection: "row", marginBottom: 5, padding: 10 }}>
            <View style={{}}>
                {renderIcon()}
            </View>
            <TouchableOpacity
                style={{ marginStart: 10, borderWidth: 0.5, borderColor: "white", borderBottomEndRadius: 12, borderTopEndRadius: 12 }}
                activeOpacity={0.5}
                onPress={navigate}
            >

                <Text style={styles.buttonText}>{heading}</Text>
            </TouchableOpacity >
        </View>

    )
}
const styles = StyleSheet.create({

    buttonText: {
        fontSize: 16,
        color: "black",
    },

});

export default DrawerButon