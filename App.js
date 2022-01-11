import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/navigation";
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

    </Provider>

  );

}