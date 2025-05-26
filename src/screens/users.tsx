import React, { use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import Edit from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import BottomSheet from '@gorhom/bottom-sheet';

const Users = ({ route, navigation }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const user = auth().currentUser;
    const snapPoints = useMemo(() => ['90%'], []);
    const [isAddProfile, setIsAddProfile] = useState(false)


    const bottomSheetRef = useRef(null);
    useEffect(() => {
        setCurrentUser(user);

        const unsubscribe = auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    const [userProfileEdit, setUserProfileEdit] = useState(false)
    const [profiles, setProfiles] = useState([
        {
            id: '1',
            name: user?.displayName,
            profile: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        },
        {
            id: '2',
            name: 'Children',
            profile: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        }
    ]);


    const fullProfileList = [...profiles, {
        id: 'add',
        name: 'Add Profile',
        profile: 'https://assets.website-files.com/60d88f11017713440c0f1a9d/60d8c137d33b3921bbf9ae29_add-icon.png'
    }];
    const handleAddProfile = () => {


        // const newId = (profiles.length + 1).toString();
        // const newProfile = {
        //     id: newId,
        //     name: `Profile ${newId}`,
        //     profile: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        // };
        // setProfiles(prev => [...prev, newProfile]);
    };
    const handleProfilePress = (item) => {
        if (item.id == 'add') {
            setIsAddProfile(true)
        }
        else {
            setIsAddProfile(false)
        }
        if (item.id === 'add' || userProfileEdit) {
            bottomSheetRef?.current?.expand()
            // handleAddProfile();
        } else {

            navigation.navigate('MyHome', { selectedProfile: item });
        }
    };
    const renderItem = ({ item }) => {
        return (
            <View style={styles.userProfileContainer}>
                <TouchableOpacity
                    style={styles.userProfileImage}
                    onPress={() => handleProfilePress(item)}
                >
                    <Image
                        source={{ uri: item.profile }}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    {userProfileEdit && item.id != 'add' && (
                        <View style={styles.editIconOverlay}>
                            <Edit name="edit-2" size={20} color="#fff" />
                        </View>
                    )}
                </TouchableOpacity>

                <View>
                    <Text style={styles.userProfileTxt}>{item.name}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 50, alignItems: "center", justifyContent: "center" }}>
                {/* <Text style={{color:"white"}}>Welcome, {currentUser?.displayName}</Text> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1, marginRight: 15 }}>
                    <View style={{ flex: 1, }} />
                    <View style={{ flex: 2, justifyContent: "center" }}>

                        <Text style={[styles.heading, {fontWeight:"800"}]}>{userProfileEdit ? `Manage profiles` : `Who's watching?`}</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 0.7, alignItems: "flex-end", justifyContent: "center" }} onPress={() => setUserProfileEdit(!userProfileEdit)}>
                        <Text style={[styles.heading, { fontSize: 18, fontWeight:'700' }]}>{userProfileEdit ? `Done` : `Edit`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.userProfileContainer}>
            </View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={fullProfileList}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}
            />
            <BottomSheet
                backgroundStyle={{ backgroundColor: 'rgb(21, 20, 20)' }}
                //  containerStyle={{backgroundColor:"transparent"}}
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
            //   style={{backgroundColor:'red'}}
            >
                <View style={{}}>
                    {isAddProfile &&

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10 }}>
                            <TouchableOpacity onPress={() => bottomSheetRef?.current?.close()}>
                                <Text style={{ fontWeight: "600", fontSize: 18, color: colors.white }}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: "800", fontSize: 20, color: colors.white }}>Add profile</Text>
                            <TouchableOpacity>
                                <Text style={{ fontWeight: "600", fontSize: 18, color: colors.white }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
};


export default Users;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,

    },
    heading: { fontSize: 24, color: 'white', marginBottom: 10 },

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
        // justifyContent: "center",
        flex: 0.5
    },
    addBtn: {
        position: "absolute",
        margin: 20,
    },
    editIconOverlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: "center",

        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 10,

        height: 80,
        width: 80
    },
})