import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FC} from "react";
import {COLORS, SHADOWS, SIZES} from "../../../constants";

interface ICircleButton {
    imgUrl: HTMLImageElement,
    handlePress: () => void
    left?: number
    top?: number
    right?: number
    bottom?: number
}

export const CircleButton: FC<ICircleButton> = ({imgUrl, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{
                    width: 24,
                    height: 24
                }}
            />
        </TouchableOpacity>
    );
}

