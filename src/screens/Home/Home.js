import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
    Alert,
    SafeAreaView
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from "react-native-vector-icons/Ionicons";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null
        };
    }

    //barcode olarak değiştir

    static navigationOptions = {
        tabBarLabel: "Barkod Okut",
        tabBarIcon: <Icon name="ios-contact" color="#e5e5e5" size={24} />
    }


    // Tüm ürünleri listele olarak değiştir

    static navigationOptions = {
        tabBarLabel: "Tüm Ürünleri Gör",
        tabBarIcon: <Icon name="ios-contact" color="#e5e5e5" size={24} />
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={styles.content}>
                    <StatusBar backgroundColor="#6B52AE" barStyle="light-content" />
                    <View style={styles.container}>
                        <View style={styles.logOutContainer}>
                            <TouchableOpacity
                                style={styles.logOutBtnContainer}
                                onPress={() => this.props.navigation.navigate("Auth")}
                            >
                                <Icon
                                    name="ios-log-out"
                                    color="#e5e5e5"
                                    size={24}
                                    style={styles.m_r_5}
                                />
                                <Text style={styles.textWhite}>Çıkış yap</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.mainContainer}>
                            <TouchableOpacity
                                style={styles.btnContainer}
                                onPress={() => this.props.navigation.navigate("BarcodeScannerScreen")}
                            >
                                <Text style={styles.textWhite}>Barkod Okut</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnContainer}
                                onPress={() => this.props.navigation.navigate("Item")}
                            >
                                    <Text style={styles.textWhite}>Tüm Ürünleri Gör</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#123B67"
    },
    content: {
        backgroundColor: "#123B67",
        flex: 1,
        paddingTop: 50
    },
    textWhite: {
        color: "#ffffff",
        fontWeight: "600"
    },
    logOutContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    logOutBtnContainer: {
        width: 300,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#e5e5e5",
        borderRadius: 5
    },
    m_r_5: {
        marginRight: 5
    },
    mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    btnContainer: {
        width: 200,
        height: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#e5e5e5",
        borderRadius: 200,
        marginBottom: 10
    }
});

export default Home;