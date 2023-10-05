import {FlatList, SafeAreaView, View} from 'react-native';
import {FocusedStatusBar, NFTCard, HomeHeader} from "../components"
import {COLORS, NFTData} from "../constants";
import {useState} from "react";

export const Home = () => {
    const [nftData, setNftData] = useState<NFTCardInterface[]>(NFTData)

    const handleSearch = (value: string): void => {
        if (!value) return setNftData(NFTData)

        const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        if (filteredData) return setNftData(filteredData)
        return setNftData(NFTData)
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
            <FocusedStatusBar/>
            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList
                        data={nftData}
                        renderItem={({item}) => <NFTCard data={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
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
                    <View style={{height: 300, backgroundColor: COLORS.primary}}/>
                    <View style={{flex: 1, backgroundColor: COLORS.white}}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

