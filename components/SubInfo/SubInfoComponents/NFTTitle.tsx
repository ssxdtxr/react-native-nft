import { View, Text } from 'react-native';
import {FC} from "react";
import {COLORS, FONTS, SIZES} from "../../../constants";
export interface INFTTitle {
    title: string
    subTitle: string
    titleSize?: number
    subTitleSize?: number
}
export const NFTTitle: FC<INFTTitle> = ({subTitle, title, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize || SIZES.large,
          color: COLORS.primary
      }}>
          {title}
      </Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize || SIZES.small,
          color: COLORS.primary
      }}>
          {subTitle}
      </Text>
    </View>
  );
}

