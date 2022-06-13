import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "../views/Home";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{ header: () => null }} />

    </HomeStack.Navigator>
}

export default HomeNavigator;