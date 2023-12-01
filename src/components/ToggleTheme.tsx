import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, Switch } from "react-native";
import { useColorScheme } from 'nativewind';

import colors from 'tailwindcss/colors';

export function ToggleTheme() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [statusBarColor, setStatusBarColor] = useState("");

    return (
        <View className="flex-row items-center">
            <StatusBar style={statusBarColor} translucent />
            <Text className="text-yellow-500">
                Dark
            </Text>

            <Switch
                trackColor={{ true: colors.blue[400], false: colors.yellow[500] }}
                thumbColor={colorScheme === "light" ? colors.blue[900] : colors.yellow[900]}
                onValueChange={toggleColorScheme}
                value={colorScheme === "light"}
                onTouchStart={() => colorScheme === 'light' ? setStatusBarColor("light") : setStatusBarColor("dark")}
            />

            <Text className="text-blue-400">
                Light
            </Text>
        </View>
    )
}