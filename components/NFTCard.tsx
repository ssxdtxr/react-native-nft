import {View, Text, Image} from 'react-native';
import {FC} from "react";
import {assets, COLORS, SHADOWS, SIZES} from "../constants";
import {CircleButton} from "./UI/Buttons/CircleButton";
import {SubInfo} from "./SubInfo/SubInfo";
import {NFTTitle} from "./SubInfo/SubInfoComponents/NFTTitle";
import {EthPrice} from "./SubInfo/SubInfoComponents/EthPrice";
import {RectButton} from "./UI/Buttons/RectButton";
import {useNavigation} from "@react-navigation/native";

export interface INFTCard {
    data: NFTCardInterface
}

export const NFTCard: FC<INFTCard> = ({data}) => {
    const {image, price, name, creator} = data
    const navigation = useNavigation()
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
                <CircleButton
                    imgUrl={assets.heart}
                    top={10}
                    right={10}
                    handlePress={() => {}}
                />
            </View>
            <SubInfo data={data}/>
            <View style={{width: "100%", padding: SIZES.font}}>
                <NFTTitle title={name} subTitle={creator}/>
                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <EthPrice price={price}/>
                    <RectButton handlePress={() => navigation.navigate("Details", {data})}/>
                </View>
            </View>
        </View>
    );
}

