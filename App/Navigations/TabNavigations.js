import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Appointment from "../Screens/Appointment";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
    return (
        <Tab.Navigator initialRouteName={Home} screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='home-outline' size={size} color={'black'}/>
                    )
                }}
                />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Appointment" component={Appointment} />
        </Tab.Navigator>
    );
}
// screenOptions={{
//     headerShown: false
// }}
