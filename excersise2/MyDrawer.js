import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
const Drawer = createDrawerNavigator();
const MyDrawer=()=>{
    return(

        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen   name="Details" component={DetailsScreen}/>
        </Drawer.Navigator>
    )
}
export default MyDrawer;