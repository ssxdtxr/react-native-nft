import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FC} from "react";
import {COLORS, FONTS, SHADOWS, SIZES} from "../../../constants";

interface IRectButton {
    handlePress: () => void,
    minWidth?: number,
    fonsSize?: number
}
export const RectButton: FC<IRectButton> = ({handlePress, minWidth}) => {
  return (
      <TouchableOpacity
          style={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.extraLarge,
              minWidth: minWidth || 120,
              padding: SIZES.small,
              ...SHADOWS.light,
          }}
          onPress={handlePress}
      >
          <Text style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.font,
              color: COLORS.white,
              textAlign: "center"
          }}>
              Place a bid
          </Text>
      </TouchableOpacity>
  );
}

