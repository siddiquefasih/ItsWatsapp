import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigation";
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import NavService from './src/components/NavigationService'
import { LogBox, StatusBar } from "react-native";
import Toast from 'react-native-toast-message';
LogBox.ignoreAllLogs(true)
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar
          translucent
          backgroundColor={'transparent'}
      />
      <NavigationContainer ref={(ref) => NavService.setTopLevelNavigator(ref)} >
        <MyStack />
      </NavigationContainer>
      <Toast />
    </Provider>

  );

}

