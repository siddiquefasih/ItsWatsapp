import React, { useEffect, } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Switch, ActionSheetIOS, ActivityIndicator } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import ContactCustomHeader from "../../components/ContactsCustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";

const ContactBook = (ContactScreenProps) => {
    console.log(ContactScreenProps, "propsprops");
    return (

        <View style={{ marginTop: 15 }}>

            <CustomHeader heading={"Contact Book"} navigation={ContactScreenProps.navigation} />
            <ContactCustomHeader heading={"Contacts"} navigation={ContactScreenProps.navigation} />

        </View>

    )
}

export default ContactBook;     