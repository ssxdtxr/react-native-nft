import {View} from 'react-native';
import {SIZES} from "../../constants";
import {People} from "./SubInfoComponents/People";
import {EndDate} from "./SubInfoComponents/EndDate";

export const SubInfo = () => {
    return (
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
    );
}

