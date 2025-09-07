import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
    return (
        <Tabs screenOptions={{}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => <Ionicons name="flash-outline" />,
                }}
            />            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings" />,
                }}
            />
        </Tabs>
    )
}

export default TabLayout;
