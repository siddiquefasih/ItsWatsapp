import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Chat from "../containers/auth/Chat";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import Intelligence from "../containers/auth/Intelligence";
import Conversation from "../containers/auth/Conversation";
import DrawerContent from "../containers/auth/DrawerContent"

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Intelligence" component={Intelligence} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Conversation" component={Conversation}/>

        </Drawer.Navigator>

    );
}

export default MyDrawer;

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        alignSelf: 'center',
    },
});
