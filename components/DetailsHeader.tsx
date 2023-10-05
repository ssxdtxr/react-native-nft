import {View, Text, Image, StatusBar} from 'react-native';
import {FC} from "react";
import {CircleButton} from "./UI/Buttons/CircleButton";
import {assets, COLORS, FONTS, SIZES} from "../constants";
import {SubInfo} from "./SubInfo/SubInfo";
import {DetailsDesc} from "./DetailsDesc";

interface IDetailsHeader {
    data: NFTCardInterface
    navigation: any
}

export const DetailsHeader: FC<IDetailsHeader> = ({data, navigation}) => {
    const {bids} = data
    return (
        <>
            <View style={{width: "100%", height: 373}}>
                <Image
                    source={data.image}
                    resizeMode="cover"
                    style={{width: "100%", height: "100%"}}
                />
                <CircleButton
                    imgUrl={assets.left}
                    handlePress={() => navigation.goBack()}
                    left={15}
                    top={10}
                />
                <CircleButton
                    imgUrl={assets.heart}
                    handlePress={() => {
                    }}
                    right={15}
                    top={10}
                />
            </View>
            <SubInfo />
            <View style={{padding: SIZES.font}}>
                <DetailsDesc data={data}/>
                {bids.length &&
                    <Text style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary
                    }}>
                        Curren bids
                    </Text>
                }
            </View>
        </>
    );
}

