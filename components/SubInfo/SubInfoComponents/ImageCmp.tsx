import {View, Text, Image} from 'react-native';
import {FC} from "react";
import {SIZES} from "../../../constants";

interface IImageCmp {
    imgUrl: HTMLImageElement
    index: number
}

export const ImageCmp: FC<IImageCmp> = ({imgUrl, index}) => {
    return (
        <Image
            source={imgUrl}
            resizeMode='contain'
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    );
}

