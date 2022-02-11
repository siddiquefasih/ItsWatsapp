import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../containers/auth/Splash"
import { View } from "react-native";
import LoginScreen from "../containers/auth/LoginScreen";
import Intelligence from "../containers/auth/Intelligence";
import Chat from "../containers/auth/Chat";
import MyDrawer from "./drawerNavigation";
import Messages from "../containers/auth/Messages";
import Conversation from "../containers/auth/Conversation";
import ConversationMessage from "../containers/auth/ConversationMessage";
import ContactBook from "../containers/auth/ContactBook";
import BlockedContacts from "../containers/auth/BlockedContacts";
import ContactGroup from "../containers/auth/ContactGroup";
import ContactScreenDrawerNavigation from "./ContactScreenDrawerNavigation";
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Intelligence" component={MyDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
            <Stack.Screen name="Conversation" component={Conversation} options={{ headerShown: false }} />
            <Stack.Screen name="ConversationMessage" component={ConversationMessage} options={{ headerShown: false }} />
            <Stack.Screen name="ContactBook" component={ContactScreenDrawerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="BlockedContacts" component={BlockedContacts} options={{ headerShown: false }} />
            <Stack.Screen name="ContactGroup" component={ContactGroup} options={{ headerShown: false }} />


        </Stack.Navigator>

    );
}
export default MyStack