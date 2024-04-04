import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../constants/colors'
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import PlayIcon from 'react-native-vector-icons/AntDesign';
import { fonts } from '../constants/fonts';
import { searchData } from '../constants/searchData';
interface RenderDataProps {
    item: {
        id: number;
        searchItem: string;
        name: string;
    };
}
const renderSearchItems = ({ item }: RenderDataProps) => {
    return (
        <View style={styles.searchItemView}>

            <TouchableOpacity style={styles.searchItemContainer} >
                <Image

                    source={{ uri: item.searchItem }}
                    style={styles.image}
                />
                <Text style={styles.searchItemTxt}>
                    {item.name}
                </Text>
                <PlayIcon name="playcircleo" size={26} style={styles.playIcon} />
            </TouchableOpacity>
        </View>
    )
};
const Search = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <TextInput placeholder='Search for a show, movie, genre, e.t.c'
                    placeholderTextColor={colors.grey} style={styles.input} />
                <SearchIcon name="search" size={20} style={styles.iconSearch} />
                <SearchIcon name="microphone" size={20} style={styles.iconMicrophone} />
            </View>
            <View >
                <Text style={styles.topSearchesTxt}>
                    Top Searches
                </Text>
                <FlatList
                    data={searchData}
                    renderItem={renderSearchItems}
                    keyExtractor={item => item.id.toString()}

                />
            </View>
        </SafeAreaView>
    )
}

export default Search
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

    },
    input: {
        backgroundColor: colors.darkgrey,
        width: "100%",
        paddingHorizontal: 60,
        color: colors.white,
        fontSize: 12
    },
    iconSearch: {
        color: colors.grey,
        position: "absolute",
        left: 30,
        top: 14,

    },
    iconMicrophone: {
        color: colors.grey,
        position: "absolute",
        right: 26,
        top: 14
    },

    topSearchesTxt: {
        color: 'white',
        fontFamily: fonts.poppinsRegular,
        fontWeight: "900",
        fontSize: 22,
        marginVertical: 14,
        marginHorizontal: 12
    },
    image: {
        height: 90,
        width: 140,

    },
    searchItemTxt: {
        color: colors.white,
        marginHorizontal: 36,
        fontFamily: fonts.poppinsRegular,
        fontSize: 12
    },
    searchItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.darkgrey,

    },
    searchItemView: {
        marginVertical: 2,

    },
    playIcon: {
        color: colors.white,
        position: "absolute",
        right: 12
    }
})