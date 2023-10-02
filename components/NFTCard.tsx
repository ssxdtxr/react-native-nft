import {View, Text, Image} from 'react-native';
import {FC} from "react";
import {useNavigation} from "@react-navigation/native";
import {assets, COLORS, SHADOWS, SIZES} from "../constants";
import {CircleButton} from "./UI/Buttons/CircleButton";
import {SubInfo} from "./SubInfo/SubInfo";

interface INFTCard {
    id: string,
    name: string,
    creator: string,
    price: number,
    description: string,
    image: HTMLImageElement,
    bids: { id: string, name: string, price: number, image: HTMLImageElement, date: string }[]
}

export const NFTCard: FC<INFTCard> = ({creator, bids, id, image, price, description, name}) => {
    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{width: "100%", height: 250}}>
                <Image
                    source={image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font
                    }}
                />
                <CircleButton imgUrl={assets.heart} top={10} right={10}/>
            </View>
            <SubInfo title={name} subTitle={creator} price={price}/>
        </View>
    );
}

