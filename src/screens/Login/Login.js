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

class Login extends React.Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#123B67",
            borderBottomWidth: 0
        },
        headerTintColor: "#e5e5e5"
    };

    constructor(props) {
        super(props);
        this.state = {
            kullanıcıAdı: "abn",
            sifre: ""
        };
    }

    props() {
        var name = this.state.kullanıcıAdı;
        var pass = this.state.sifre;
        var present = this;
        fetch({
            body: serializeKey({
                kullanıcıAdı: name,
                sifre: pass
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.result != -1)
                    present.props.navigation.push({
                        id: 'Main',
                        name: 'Main'

                    })
                else
                    Alert.alert("Kullanıcı doğrulanamadı");
            })
            .catch((error) => {
                Alert.alert("data", "Sunucuya bağlanırken bir hata oluştu" + error)

            });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={styles.content}>
                    <StatusBar backgroundColor="blue" barStyle="light-content" />
                    <Image
                        source={require("./abn.png")}
                        style={{ width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 }} />
                    <TextInput
                        style={styles.input}
                        placeholder="Kullanıcı Adı"
                        placeholderTextColor="#bcbcbc"
                        value={this.state.kullanıcıAdı}
                        onChangeText={(value) => this.setState({ kullanıcıAdı: abn })
                        }
                        editable={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Şifre"
                        placeholderTextColor="#bcbcbc"
                        secureTextEntry
                        value={this.state.sifre}
                        onChangeText={(value) => this.setState({ sifre: 123 })}
                    />
                    <TouchableOpacity
                        style={styles.btnContainer}
                        //onPress={this.go}
                        onPress={() => this.props.navigation.navigate("HomeScreen")}
                    >
                        <Text style={styles.btnText}>Giriş</Text>
                    </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    containerChild: {
        flex: 1
    },
    input: {
        width: 300,
        height: 40,
        padding: 10,
        backgroundColor: "#e5e5e5",
        marginBottom: 10,
        borderRadius: 5
    },
    containerFlexEnd: {
        justifyContent: "center",
        alignItems: "center"
    },
    containerCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    btnContainer: {
        width: 300,
        height: 50,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#e5e5e5",
        borderRadius: 5,
        marginBottom: 10
    },
    btnText: {
        fontWeight: "900",
        color: "#e5e5e5"
    }
});

export default Login;