import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, TextInput, ImageSourcePropType } from 'react-native';
import Social from 'react-native-vector-icons/MaterialCommunityIcons';
import MoreIcon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { colors } from '../constants/colors';
import { userProfiles } from '../constants/userProfiles';
import { fonts } from '../constants/fonts';
interface RenderDataProps {
    item: {
        id: number;
        profile: ImageSourcePropType;
        name: string;
    };
}
const renderItem = ({ item }: RenderDataProps) => {


    return (
        <View >
            <TouchableOpacity style={styles.profileContainer}>
                <Image source={item.profile} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>

        </View>
    );
};
const MyMenu = () => {
    return (
        <SafeAreaView style={styles.conatiner}>
            <View>

                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={userProfiles}
                    renderItem={renderItem}
                    horizontal

                />
                <View>
                    <TouchableOpacity style={{ alignItems: "center" }}>
                        {/* <Icon name="pencil" size={15} style={[styles.icon, { right: 80, top: 10 }]} /> */}
                        <Text style={styles.manageProfilesTxt}>
                            Manage Profiles
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerView}>

                    <Text style={styles.containerViewText}>
                        Tell friends about Netflix.
                    </Text>
                    <Text style={styles.containerViewText1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consequatur porro, quos nam officiis inventore?
                    </Text>
                    <Text style={styles.tcText}>
                        Terms & Conditions
                    </Text>
                    <View style={styles.inputBtnContainer}>
                        <TextInput style={styles.input} placeholder='enter' />
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntxt}>Copy Link</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <Social name="whatsapp" size={40} style={styles.icon} />
                        </TouchableOpacity>
                        <View style={styles.verticleLine}></View>
                        <TouchableOpacity>
                            <Social name="facebook" size={40} style={styles.icon} />
                        </TouchableOpacity>
                        <View style={styles.verticleLine}></View>
                        <TouchableOpacity>
                            <Social name="gmail" size={40} style={styles.icon} />
                        </TouchableOpacity>
                        <View style={styles.verticleLine}></View>
                        <TouchableOpacity>
                            <View style={styles.moreContainer}>
                                <MoreIcon name="more-horizontal" size={40} style={styles.icon} />
                                <Text style={styles.containerViewText1}>
                                    More
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.myListContainer}>
                    <View style={styles.myList}>

                        <Social name='check' size={28} style={styles.icon} />
                        <Text style={styles.mylistText}>
                            My List
                        </Text>
                    </View>
                </View>
                <View style={styles.horizontalLine} />
                <View style={styles.listContainer}>
                    <TouchableOpacity>

                        <Text style={styles.mylistText}>
                            App Settings
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Text style={styles.mylistText}>
                            Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Text style={styles.mylistText}>
                            Help
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <Text style={styles.mylistText}>
                            Sign Out
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default MyMenu
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: colors.black
    },
    profileContainer: {
        padding: 4,
        marginVertical: 20,
        alignItems: "center"
    },
    text: {
        color: colors.white,
        textAlign: "center",
        fontSize: 12,
        marginVertical: 8,
        fontFamily: fonts.poppinsRegular
    },
    image: {
        height: 66,
        width: 66,
        borderRadius: 8
    },
    manageProfilesTxt: {
        color: colors.white,
        textAlign: "center",
        fontFamily: fonts.poppinsRegular,
        fontSize: 12,
        marginVertical: -8
    },
    containerView: {
        backgroundColor: colors.bottomTabGrey,
        height: 250,
        width: "100%",
        marginVertical: 16,
        padding: 14
    },
    containerViewText: {
        color: colors.white,

        fontFamily: fonts.poppinsRegular,
        fontWeight: "800",
        fontSize: 17
    },
    containerViewText1: {
        color: colors.white,
        fontFamily: fonts.poppinsRegular,
        fontSize: 10
    },
    tcText: {
        color: colors.grey,
        textDecorationLine: "underline",
        fontSize: 10,
        marginVertical: 10
    },
    input: {
        backgroundColor: colors.black,
        width: "75%",
        height: 40,
        color: colors.white
    },
    btn: {
        backgroundColor: colors.white,
        paddingVertical: 4,
        paddingHorizontal: 12,
        justifyContent: "center",
        borderRadius: 4
    },
    inputBtnContainer: {
        flexDirection: "row",
        gap: 10,
        marginEnd: 20
    },
    btntxt: {
        color: colors.black,
        textAlign: "center",
        fontSize: 13,
        fontFamily: fonts.poppinsRegular,
        fontWeight: "900"
    },
    icon: {
        color: colors.white,

    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        marginVertical: 12
    },
    verticleLine: {
        height: '80%',
        width: 0.5,
        backgroundColor: colors.borderBottom,
    },
    moreContainer: {
        alignItems: "center",

    },
    mylistText: {
        color: colors.white,
        fontFamily: fonts.poppinsRegular,
        fontSize: 12,

    },
    myListContainer: {

        marginHorizontal: 38,
        alignItems: "flex-start"
    },
    horizontalLine: {
        borderBottomColor: colors.borderBottom,
        borderBottomWidth: 0.5,
    },
    listContainer: {
        padding: 10,
        paddingVertical: 20,
        gap: 14,
        alignItems: "flex-start",
        marginHorizontal: 40
    },
    myList: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginVertical: 4
    },
})