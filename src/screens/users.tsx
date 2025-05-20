import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native';
import { colors } from '../constants/colors';
import { userProfiles } from '../constants/userProfiles';
import { fonts } from '../constants/fonts';
import { ImageSourcePropType } from 'react-native';
import { firebase } from '@react-native-firebase/firestore'
import firestore from '@react-native-firebase/firestore';
import { addProfile } from '../constants/addprofileImage';
interface RenderDataProps {
    item: {
        id: number;
        profile: string;
        name: string;

    };
    navigation: NavigationProp<ParamListBase>;
}

const Users = () => {
    const numOfCols = 2;
    const navigation = useNavigation();
    // const [Profiles, setUserProfiles] = useState([]);
    // useEffect(() => {
    //     const unsubscribe = firestore().collection("UserProfiles").onSnapshot((snapshot) => {
    //         const profilesData = [];
    //         snapshot.forEach((doc) => {
    //             profilesData.push({ id: doc.id, ...doc.data() });
    //         });
    //         console.log({ profilesData })
    //         setUserProfiles(profilesData);
    //     });

    //     return () => unsubscribe();
    // }, []);

    // const handleAddProfile = () => {
    //     const dupl = userProfiles;
    //     console.log({ dupl })
    //     if (dupl.length) {
    //         const randomProfile = dupl[0];
    //         const newProfile = {
    //             name: randomProfile.name,
    //             profile: randomProfile.profile
    //         };
    //         firestore()
    //             .collection("UserProfiles")
    //             .add({
    //                 name: newProfile.name,
    //                 profile: newProfile.profile
    //             })
    //             .then(() => {
    //                 console.log("New profile added to Firestore");
    //             })
    //             .catch((error) => {
    //                 console.error("Error adding new profile: ", error);
    //             });
    //         dupl.shift();
    //     }
    //     else {
    //         console.log('No profiles added more')
    //     }

    // };
    const handleNavigate = () => {
        navigation.navigate('MyHome');
    }

    const renderItem = ({ item }: RenderDataProps) => {
        return (
            <View style={styles.userProfileContainer}>
                <TouchableOpacity style={styles.userProfileImage} onPress={handleNavigate}>
                    <Image source={{ uri: item.profile }} style={styles.image}
                        resizeMode="contain" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.userProfileTxt}>{item.name}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={userProfiles}
                renderItem={renderItem}
                numColumns={numOfCols}
                contentContainerStyle={styles.flatListContainer}

            />

        </SafeAreaView>
    );
};


export default Users;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginStart: 14
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    icon: {
        color: colors.white,
        position: "absolute",
        right: 16
    },
    userProfileContainer: {
        marginStart: 12,
        marginVertical: 18,
        gap: 10,
        padding: 6

    },

    userProfileTxt: {
        color: colors.white,
        textAlign: 'center',
        fontFamily: fonts.poppinsRegular,
    },
    userProfileImage: {
        alignItems: "center"
    },
    flatListContainer: {
        alignSelf: "center",
        justifyContent: "center",
        flex: 1
    },
    addBtn: {
        position: "absolute",

        margin: 20,

    }
})