import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{title:'Inicio'}}
            />
            <Stack.Screen
                name="detail"
                component={DetailScreen}
                options={{title:'Detalle'}}
            />

        </Stack.Navigator>
    )
}
