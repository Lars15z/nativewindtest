import { TouchableOpacity, Text } from "react-native";
import { StyledComponent } from 'nativewind';

export function Button({ ...rest }) {
    return (
        <StyledComponent component={TouchableOpacity} {...rest}>
            <TouchableOpacity className="h-14 bg-green-500 rounded-md items-center justify-center" >
                <Text className="text-white font-bold text-md">
                    Entrar
                </Text>
            </TouchableOpacity>
        </StyledComponent>

    )
}
