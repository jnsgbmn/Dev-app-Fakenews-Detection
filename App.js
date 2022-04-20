import React from  'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import {Home, newsheadline, newslink} from './screens';

const stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                screensOptions={{
                    headerShown: false
                }}
                initialRouteName={"Home"}
                <stack.Screen name="Home" component={Home}/>

            /</stack.Navigator>
        </NavigationContainer>
    )
}

export default App; 