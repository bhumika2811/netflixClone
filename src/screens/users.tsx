import React, { use, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import auth from '@react-native-firebase/auth';

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

const Users = ({route}) => {
    const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = auth().currentUser;
    // console.log({user});
    
    setCurrentUser(user);

    // Optional: set up listener if user data might change dynamically
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);


    const renderItem = ({ item }: RenderDataProps) => {
        return (
            <View style={styles.userProfileContainer}>
                
                <TouchableOpacity style={styles.userProfileImage} 
                // onPress={handleAddProfile}
                >
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
            <View style={{height:50, marginTop:30, alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"white"}}>Welcome, {currentUser?.displayName}</Text>
            </View>
            <View style={styles.userProfileContainer}>
                
                <TouchableOpacity style={styles.userProfileImage} 
                // onPress={handleNavigate}
                >
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" }} style={styles.image}
                        resizeMode="contain" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.userProfileTxt}>{currentUser?.displayName}</Text>
                </View>
            </View>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={userProfiles}
                renderItem={renderItem}
                // numColumns={numOfCols}
                contentContainerStyle={styles.flatListContainer}

            />

        </SafeAreaView>
    );
};


export default Users;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        
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
        // justifyContent: "center",
        flex: 0.5
    },
    addBtn: {
        position: "absolute",

        margin: 20,

    }
})