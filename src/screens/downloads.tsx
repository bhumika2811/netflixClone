import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../constants/colors'
import { fonts } from '../constants/fonts'

const Downloads = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={styles.text}>Smart Downloads</Text>
            </View>
            <View>
                <Text style={styles.headText}>
                    Introducing Downloads For You
                </Text>
                <Text style={styles.bodyText}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae autem, voluptatem dolor aliquam esse maxime voluptate harum iste deleniti earum?                </Text>
            </View>
            <View style={styles.circleViewContainer}>

                <View style={styles.circleView} />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>
                        SETUP
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.btnText}>
                        Find something to download
                    </Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Downloads
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    text: {
        color: colors.white,
        fontSize: 12,
        marginHorizontal: 18,
        fontFamily: fonts.poppinsRegular
    },
    headText: {
        color: colors.white,
        fontSize: 18,
        marginHorizontal: 18,
        fontFamily: fonts.poppinsRegular,
        fontWeight: "700",
        marginTop: 22
    },
    bodyText: {
        color: colors.white,
        fontSize: 10,
        marginHorizontal: 18,
        fontFamily: fonts.poppinsRegular,
        marginVertical: 8
    },
    circleViewContainer: {
        alignItems: "center",
        marginVertical: 10
    },
    circleView: {
        backgroundColor: colors.darkgrey,
        height: 180,
        width: 180,
        borderRadius: 90
    },
    btn: {
        backgroundColor: colors.blue,
        width: "90%",
        paddingVertical: 8,
        marginVertical: 16
    },
    btnText: {
        color: colors.white,
        textAlign: "center",
        fontSize: 12
    },
    btn2: {
        backgroundColor: colors.darkgrey,
        width: "60%",
        paddingVertical: 8,
        marginVertical: 16
    }
})