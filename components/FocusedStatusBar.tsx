import {StatusBar, View, Text} from 'react-native';
import {useIsFocused} from "@react-navigation/native";
import {COLORS} from "../constants";

export const FocusedStatusBar = () => {
    const isFocused = useIsFocused()
    return (
        <>
            {
                isFocused ?
                    <StatusBar animated={true} backgroundColor={COLORS.primary} barStyle="light-content"/>
                    :
                    null
            }
        </>
    );
}

