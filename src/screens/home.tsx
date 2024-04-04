import React from 'react';
import { Image, ImageProps, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { image } from '../constants/image';
import { fonts } from '../constants/fonts';
import { category } from '../constants/categoryData';
import imageList from '../constants/previewData';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import sectionData from '../constants/sectionListData';
import { FlatList } from 'react-native';
import { colors } from '../constants/colors';
interface RenderCategoryProps {
    item: {
        category: string;
    };

}
interface RenderPreviewProps {
    item: {
        imageUrl: string;
    };

}
interface RenderSectionListProps {
    item: {
        title: string,
        data: string[]
    };

}

const renderCategory = ({ item }: RenderCategoryProps) => {
    return (
        <View>
            <Text style={styles.txt}>{item.category}</Text>
        </View>
    );
};

const renderPreview = ({ item }: RenderPreviewProps) => {
    return (
        <TouchableOpacity style={styles.previewContainer}>
            <Image
                style={styles.previewImage}
                source={{ uri: item.imageUrl }}
            />
        </TouchableOpacity>
    )
};

const SectionListItem = ({ item }: RenderSectionListProps) => (
    <View >
        <View >
            <Text style={styles.previewTxt}>{item.title}</Text>
        </View>
        <ScrollView horizontal>
            {item?.data?.map((items, index) => {

                return (
                    <>
                        <View >
                            <Image
                                key={index}
                                style={styles.categoryImage}
                                source={{ uri: items }}
                            />
                        </View>
                    </>
                )
            })}
        </ScrollView>
    </View>

);




const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Image source={image.backGround} style={styles.image} />
                    <Image source={image.icon} style={styles.logo} />
                    <View style={styles.overlay}>
                        <FlatList
                            renderItem={renderCategory}
                            data={category}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.listContainer}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <View>
                            <Icon name="plus" size={26} style={styles.icons} />
                            <Text style={styles.txt2}>My List</Text>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Icon1 name="play" size={26} style={styles.icon} />
                            <Text style={styles.btnTxt}>Play</Text>
                        </TouchableOpacity>
                        <View>
                            <Icon name="infocirlceo" size={26} style={styles.icons} />
                            <Text style={styles.txt2}>Info</Text>
                        </View>
                    </View>
                    <View style={styles.preview}>
                        <Text style={styles.previewTxt}>Previews</Text>
                        <FlatList
                            data={imageList}
                            renderItem={renderPreview}
                            keyExtractor={item => item.id.toString()}
                            horizontal
                        />
                    </View>
                    <FlatList
                        renderItem={SectionListItem}
                        data={sectionData}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        width: '100%',
    },
    logo: {
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    txt: {
        color: 'white',
        fontFamily: fonts.poppinsRegular,
        fontSize: 16,
    },
    listContainer: {
        flexDirection: 'row',
        gap: 30,
        paddingHorizontal: 38,
        paddingVertical: 10,
        marginHorizontal: 20
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: colors.white,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10,

    },
    btnTxt: {
        color: colors.black,
        fontFamily: fonts.poppinsBold,
    },
    icon: {
        color: colors.black,
    },
    icons: {
        color: colors.white,
        textAlign: 'center',
    },
    txt2: {
        color: colors.white,
        fontFamily: fonts.poppinsRegular,
        fontSize: 12,
    },
    preview: {

        marginVertical: 8
    },
    previewTxt: {
        color: colors.white,
        fontFamily: fonts.poppinsBold,
        fontSize: 18,
    },
    previewImage: {
        height: '100%',
        width: '100%',
        borderRadius: 70,
    },
    previewContainer: {
        height: 126,
        width: 126,
        padding: 6,
    },
    categoryImage: {
        height: 170,
        width: 120,
        marginHorizontal: 6,
        marginVertical: 8,
    }
});

export default Home;
