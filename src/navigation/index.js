import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../containers/auth/Splash"
import { View } from "react-native";
import LoginScreen from "../containers/auth/LoginScreen";
import Intelligence from "../containers/auth/Intelligence";
import Chat from "../containers/auth/Chat";
import MyDrawer from "./drawerNavigation";
import Messages from "../containers/auth/Messages";
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Intelligence" component={MyDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={MyDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>

    );
}
export default MyStack