import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, Keyboard } from "react-native";
import FastImage from 'react-native-fast-image'
import { connect, useSelector, useDispatch } from 'react-redux';
import NavigationService from "../../components/NavigationService";
import * as Actions from '../../redux/actions/ActionsTypes'
import { Login } from '../../redux/actions/loginAction'
import { Token } from "../../redux/actions/tokenAction";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ActivityIndicator } from "react-native-paper";
import Toast from 'react-native-toast-message';

let vh = Dimensions.get('window').height
let vw = Dimensions.get('window').width

const LoginScreen = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPssword] = useState('');
    const [show, setShow] = useState(true);
    const [loader, setLoader] = useState(false);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(Token())
    }, [])
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setShow(false);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setShow(true);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    let token = useSelector(state => state.TokenReducer.client_token)
    // let loginState = useSelector(state => state.AuthReducer)

    console.log(token, "TOkENNNnnnnnnn")
    const login = () => {
       setLoader(true)
        const data = { username: userEmail, password: userPassword }
        dispatch(Login(data, token,() =>setLoader(false)))
    }
    return (
        <ImageBackground
            style={{ flex: 1, paddingTop: getStatusBarHeight() + 20 }}
            imageStyle={{ flex: 1 }}
            source={require('./../../assets/loginBg.jpg')}
        >
            {show &&
                <FastImage
                    style={{ width: '80%', height: 100, alignSelf: "center" }}
                    resizeMode="contain"
                    source={require('./../../assets/loginGif.gif')}
                />
            }
            <View style={{ paddingHorizontal: 25, paddingTop: 40, alignContent: "center", flex: 1 }}>

                <Text style={{ alignSelf: "center", color: "white", fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
                    Welcome to Intellexal Solutions!
                </Text>

                {show && <Text
                    style={{ alignSelf: 'center', color: 'white', marginVertical: 10, textAlign: 'center' }}
                >Using our experience from across industries and continents, we tailor solutions that fit your business needs.
                    {"\n\n"}
                    As a WhatsApp Business Solution Provider, we enable enterprises to connect to WhatsApp directly – either through our API or using our web-based interface.
                </Text>}

                <Text style={{ alignSelf: "center", color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 25, marginTop: 5 }}>
                    Login to your account
                </Text>

         
                    <TextInput
                        style={{height:50, paddingHorizontal: 10, color: "white",borderRadius: 6, borderColor: "white", borderWidth: 1, marginBottom: 10 }} placeholder="User Name" placeholderTextColor='white' onChangeText={(userEmail) => setUserEmail(userEmail)} />

                <TextInput
                    style={{ height:50,paddingHorizontal: 10, color: "white", borderRadius: 6, marginTop: 10, borderWidth: 1, borderColor: "white", marginBottom: 15 }} secureTextEntry placeholder="Password" placeholderTextColor='white' onChangeText={(userPassword) => setUserPssword(userPassword)} />

                <TouchableOpacity
                    activeOpacity={0.5}>

                    <Text style={styles.forgotPasswordTextStyle}>Forgot Password</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={login}
                    activeOpacity={0.5}>

                    {loader?<ActivityIndicator color="white"size={"small"}/>:<Text style={styles.buttonTextStyle}>Login</Text>
                    }
                </TouchableOpacity>

            </View>

        </ImageBackground>

    )
}

export default LoginScreen;

const styles = StyleSheet.create({

    buttonTextStyle: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
    forgotPasswordTextStyle: {
        fontSize: 18,
        color: "white",
        alignSelf: "flex-end",
        marginBottom: 20
    },
    buttonStyle: {
        backgroundColor: '#F50057',
        color: '#FFFFFF',
        borderWidth: 0,
        borderColor: '#7DE24E',
        borderRadius: 8,
        marginHorizontal: 5,
        marginTop: 15,
        paddingHorizontal: 10,
        height:50,
        justifyContent:"center"

    },

});



