import {View, Text} from 'react-native';
import {NFTTitle} from "./SubInfo/SubInfoComponents/NFTTitle";
import {INFTCard} from "./NFTCard";
import {FC, useState} from "react";
import {COLORS, FONTS, SIZES} from "../constants";
import {EthPrice} from "./SubInfo/SubInfoComponents/EthPrice";

export const DetailsDesc: FC<INFTCard> = ({data}) => {
    const {name, creator, price, description} = data
    const [text, setText] = useState<string>(description.slice(0, 100))
    const [isReadMore, setIsReadMore] = useState<boolean>(false)

    const handleText = () => {
        if (!isReadMore) {
            setText(description)
            setIsReadMore(true)
        } else {
            setText(description.slice(0, 100))
            setIsReadMore(false)
        }
    }
    return (
        <>
            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <NFTTitle
                    title={name}
                    subTitle={creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <EthPrice price={price}/>
            </View>
            <View style={{marginVertical: SIZES.extraLarge * 1.5}}>
                <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                }}>
                    Description
                </Text>
                <View style={{marginTop: SIZES.base}}>
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.regular,
                        color: COLORS.secondary,
                        lineHeight: SIZES.large
                    }}>
                        {!isReadMore ? text.concat("...") : text}
                        <Text
                            style={{
                                fontSize: SIZES.small,
                                fontFamily: FONTS.semiBold,
                                color: COLORS.primary,
                            }}
                            onPress={handleText}
                        >
                            {isReadMore ? "Show less" : "Read more"}
                        </Text>
                    </Text>

                </View>
            </View>
        </>
    );
}

