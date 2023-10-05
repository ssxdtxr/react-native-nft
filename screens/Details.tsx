import {View, Text, Image, SafeAreaView, StatusBar, FlatList} from 'react-native';
import {FocusedStatusBar, RectButton} from "../components";
import {COLORS, SIZES} from "../constants";
import {DetailsBid} from "../components/DetailsBid";
import {DetailsHeader} from "../components/DetailsHeader";

export const Details = ({route, navigation}) => {
    const {data} = route.params
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                paddingVertical: SIZES.font,
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, .5)",
                zIndex: 1
            }}>
                <RectButton handlePress={() => {}} minWidth={170} />
            </View>
            <FlatList
                data={data.bids}
                renderItem={({item}) => <DetailsBid bid={item} key={item.id}/>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
                ListHeaderComponent={<DetailsHeader data={data} navigation={navigation}/>}
            />
        </SafeAreaView>
    );
}

