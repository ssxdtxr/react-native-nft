import {View, Text, Image} from 'react-native';
import {FC} from "react";
import {COLORS, FONTS, SIZES} from "../constants";
import {EthPrice} from "./SubInfo/SubInfoComponents/EthPrice";

interface IDetailsBid {
    bid: IBid
}
export const DetailsBid: FC<IDetailsBid> = ({bid}) => {
  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.font,
        paddingHorizontal: SIZES.base * 2
    }}>
      <Image
          source={bid.image}
          resizeMode="contain"
          style={{
              width: 48,
              height: 48
          }}
      />
        <View>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.small,
                color: COLORS.primary
            }}>
                Bid placed by {bid.name}
            </Text>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small - 2,
                color: COLORS.secondary,
                marginTop: 3
            }}>
                {bid.date}
            </Text>
        </View>
        <EthPrice price={bid.price} />
    </View>
  );
}

