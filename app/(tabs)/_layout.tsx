import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "green",
                tabBarStyle:{
                    backgroundColor: "blue",
                    borderTopWidth: 1,
                    borderTopColor: "yellow",
                    height: 90,
                    paddingBottom: 20,
                    paddingTop:12,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => <Ionicons name="flash-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabLayout;