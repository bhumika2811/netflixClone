import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
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
                    <BellIcon name="bell" size={24} style={styles.bellicon} />

                    <ShareIcon name="share" size={26} style={styles.shareIcon} />
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
        height: 150,
        width: 400,
        marginVertical: 10
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
        position: "absolute",
        right: 66,

    },
    shareIcon: {
        color: colors.white,
        position: "absolute",
        right: 10,
    },
    iconContainer: {
        marginVertical: 30,
        justifyContent: "flex-end"
    }
})