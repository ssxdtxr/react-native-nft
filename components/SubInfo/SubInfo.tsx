import {View, Text} from 'react-native';
import {assets, SIZES} from "../../constants";
import {People} from "./SubInfoComponents/People";
import {EndDate} from "./SubInfoComponents/EndDate";
import {INFTTitle, NFTTitle} from "./SubInfoComponents/NFTTitle";
import {FC} from "react";
import {EthPrice, IEthPrice} from "./SubInfoComponents/EthPrice";
import {RectButton} from "../UI/Buttons/RectButton";
import {useNavigation} from "@react-navigation/native";

interface ISubInfo extends INFTTitle, IEthPrice {
}

export const SubInfo: FC<ISubInfo> = ({subTitle, title, price}) => {
    const navigation = useNavigation()
    return (
        <>
            <View style={{
                width: '100%',
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <People/>
                <EndDate/>
            </View>
            <View style={{width: "100%", padding: SIZES.font}}>
                <NFTTitle title={title} subTitle={subTitle}/>
                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <EthPrice price={price}/>
                    <RectButton handlePress={() => navigation.navigate("Details", {})} />
                </View>
            </View>
        </>
    );
}

