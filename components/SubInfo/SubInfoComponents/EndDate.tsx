import { View, Text } from 'react-native';
import {COLORS, FONTS, SHADOWS, SIZES} from "../../../constants";

export const EndDate = () => {
  return (
    <View
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: "50%"
        }}
    >
      <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary
      }}>
          Ending in
      </Text>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
        }}>
            12h 30min
        </Text>
    </View>
  );
}

