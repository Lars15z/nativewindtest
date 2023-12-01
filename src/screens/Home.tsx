import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import colors from 'tailwindcss/colors';
import { Button } from "../components/Button";
import { ToggleTheme } from "../components/ToggleTheme";


export function Home() {
    return (
        <View className="flex-1 dark:bg-black light:bg-white items-center justify-center p-8">
            <ToggleTheme />

            <Feather name="home" size={34} color={colors.green[500]} />

            <Text className="dark:text-white light:text-black text-2xl font-bold my-4">
                NativeWind
            </Text>

            <TextInput
                className="mb-3 w-full h-14 border-2 dark:border-white light:border-black border-solid rounded-md dark:text-white light:text-black px-4 focus:border-green-500"
            />
            <TextInput
                className="w-full h-14 border-2 dark:border-white light:border-black border-solid rounded-md dark:text-white light:text-black px-4 focus:border-green-500"
            />

            <Button className="w-full mt-8" />
        </View>
    )
}