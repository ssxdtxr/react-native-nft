import { View, Text } from 'react-native';
import {assets, SIZES} from "../constants";

export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
    }}>
        <View style={{flexDirection: "row",}}>
            {[assets.person02, assets.person03, assets.person04].map()}
        </View>

        <View style={{
            flexDirection: "row",

        }}>

        </View>
    </View>
  );
}

