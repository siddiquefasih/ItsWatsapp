import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import ContactBook from "../containers/auth/ContactBook";
import BlockedContacts from "../containers/auth/BlockedContacts";
import ContactGroup from "../containers/auth/ContactGroup";
import ContactScreenDrawerContent from "../containers/auth/ContactScreenDrawerContent";

const Drawer = createDrawerNavigator();

function ContactScreenDrawerNavigation() {
    return (
        <Drawer.Navigator  drawerContent={ContactScreenProps => <ContactScreenDrawerContent {...ContactScreenProps} />}>
            <Drawer.Screen name="ContactBook" component={ContactBook} />
            <Drawer.Screen name="BlockedContacts" component={BlockedContacts} />
            <Drawer.Screen name="ContactGroup" component={ContactGroup} />
        </Drawer.Navigator>
    );
}

export default ContactScreenDrawerNavigation;

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        alignSelf: 'center',
    },
});
