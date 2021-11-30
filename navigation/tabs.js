import React from "react";
import {
    View,
} from "react-native";

import {} from "@react-navigarion/bottom";

import {Home} from "../screens"
import { TabIcon } from "../components";
import {COLORS,icons} from "../constants";

const Tab=createBottomTabNavigator()

const Tabs=()=>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    elevation:0,
                    backgroundColor:COLORS.white,
                    borderTopColor:"transpaent",
                    height:100,

                }

            }}
        >
            <Tab.Screen
                name="Home"
                components={Home}
                options={{
                    tabBarIcon:({focused})=><TabIcon focused=
                    {focused} icons={icons.home}/>
                }}
            />
           
            <Tab.Screen
                name="Ara"
                components={Home}
                options={{
                    tabBarIcon:({focused})=><TabIcon focused=
                    {focused} icons={icons.search}/>
                }}

            
            />
            <Tab.Screen
                name="Geri Dön"
                components={Home}
                options={{
                    tabBarIcon:({focused})=><TabIcon focused=
                    {focused} icons={icons.bookmark}/>
                }}
            
            />
            <Tab.Screen
                name="Ayarlar"
                components={Home}
                options={{
                    tabBarIcon:({focused})=><TabIcon focused=
                    {focused} icons={icons.settings}/>
                }}
            
            />

        </Tab.Navigator>

    )
}

export default Tabs;