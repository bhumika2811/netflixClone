import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../constants/colors'
import { comingSoonData } from '../constants/comingSoonData'
import { fonts } from '../constants/fonts'
import BellIcon from 'react-native-vector-icons/FontAwesome';
import ShareIcon from 'react-native-vector-icons/Entypo';

interface RenderDataProps {
    item: {
        searchItem: string;
        season: string;
        name: string;
        description: string;
        genre: string[];
    };

}
const renderData = ({ item }: RenderDataProps) => {
    return (

        <View style={styles.bannerContainer} >

            <View >
                <Image
                    source={{ uri: item.searchItem }}
                    style={styles.image}
                />
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconTxt}>
                        <BellIcon name="bell" size={24} style={styles.bellicon} />
                        <Text style={styles.descTxt}>Remind me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconTxt}>
                        <ShareIcon name="share" size={26} style={styles.bellicon} />
                        <Text style={styles.descTxt}>Share</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.txtContainer}>


                    <Text style={styles.descTxt}>
                        {item.season}
                    </Text>
                    <Text style={styles.headTxt}>
                        {item.name}
                    </Text>
                    <Text style={styles.descTxt}>
                        {item.description}
                    </Text>
                    <Text style={styles.genreTxt}>
                        {item.genre.join("  .  ")}
                    </Text>
                </View>

            </View>
        </View>
    )
}
const Notifications = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <FlatList
                    data={comingSoonData}
                    renderItem={renderData} />
            </View>
        </SafeAreaView>
    )
}

export default Notifications
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        height: 190,
        width: 400,
        // marginVertical: 10
    },
    headTxt: {
        color: colors.white,
        fontFamily: fonts.poppinsRegular,
        fontWeight: "900",
        fontSize: 16,
        marginVertical: 10
    },
    bannerContainer: {
        alignItems: "center",
    },
    txtContainer: {
        marginHorizontal: 10
    },
    descTxt: {
        color: colors.grey,
        fontFamily: fonts.poppinsRegular,
        fontSize: 10,

    },
    genreTxt: {
        color: colors.white,
        fontFamily: fonts.poppinsRegular,
        fontSize: 12
    },
    bellicon: {
        color: colors.white,
        // position: "absolute",
        // right: 66,
        marginVertical: 5

    },
    iconTxt: {
        alignItems: "center",
    },

    iconContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        // backgroundColor: "red"
    }
})