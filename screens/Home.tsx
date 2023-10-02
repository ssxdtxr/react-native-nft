import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {FocusedStatusBar, NFTCard, HomeHeader} from "../components"
import {COLORS, NFTData} from "../constants";

export const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <FocusedStatusBar />
            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>

                    <FlatList
                        data={NFTData}
                        renderItem={({item}) => <NFTCard {...item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    right: 0,
                    top: 0,
                    zIndex: -1
                }}>
                    <View style={{height: 300, backgroundColor: COLORS.primary}} />
                    <View style={{flex: 1, backgroundColor: COLORS.white}} />

                </View>
            </View>
        </SafeAreaView>
    );
}

