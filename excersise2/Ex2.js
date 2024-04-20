// import PaperProvider from "react-native-paper"
import MyStack from './MyStack';
import MyDrawer from "./MyDrawer";
import BottomTab from "./BottomTab"
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
const drawer = createDrawerNavigator();
const Ex2 = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
      <drawer.Navigator >
            <drawer.Screen name="Stack" component={MyStack} />
            <drawer.Screen name="Drawer" component={MyDrawer}/>
            <drawer.Screen name="BottomTab" component={BottomTab}/>
      </drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default Ex2;
