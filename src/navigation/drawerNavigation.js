import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Chat from "../containers/auth/Chat";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import Intelligence from "../containers/auth/Intelligence";
import Sidebar from "../containers/auth/CustomDrawer";

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Intelligence" component={Intelligence} />
            <Drawer.Screen name="Chat" component={Chat} />
        </Drawer.Navigator>
    )
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
