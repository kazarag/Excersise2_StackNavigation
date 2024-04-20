// import PaperProvider from "react-native-paper"

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CustomNagivationBar from './CustomNagivationBar';

const Stack = createStackNavigator();
const MyStack = () => {
  return (

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNagivationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>

  );
};
export default MyStack;
