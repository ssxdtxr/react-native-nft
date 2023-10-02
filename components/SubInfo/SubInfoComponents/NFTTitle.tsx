import { View, Text } from 'react-native';
import {FC} from "react";
import {COLORS, FONTS, SIZES} from "../../../constants";
export interface INFTTitle {
    title: string
    subTitle: string
}
export const NFTTitle: FC<INFTTitle> = ({subTitle, title}) => {
  return (
    <View>
      <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary
      }}>
          {title}
      </Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary
      }}>
          {subTitle}
      </Text>
    </View>
  );
}

