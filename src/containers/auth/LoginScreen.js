import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/ActionsTypes'
import { Login } from '../../redux/actions/loginAction'
    import { Token } from "../../redux/actions/tokenAction";

const LoginScreen = (props) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPssword] = useState('');
    useEffect(() => {
        props.tokenAction()
    }, [])

    console.log(props,"These are Prrrrrrrrrropssss")

    return (

        <View style={{ flex: 1 }}>

            <ImageBackground style={{ flex: 1 }} source={require('./../../assets/loginBg.jpg')}>

                <FastImage
                    style={{ width: "100%", height: 100, alignSelf: "center", marginTop: "10%" }}
                    source={require('./../../assets/loginGif.gif')}
                />

                <View style={{ marginHorizontal: 25, justifyContent: "center", alignContent: "center", flex: 1 }}>

                    <Text style={{ alignSelf: "center", color: "white", fontSize: 22, fontWeight: "bold", marginTop: 20, marginBottom: 5 }}>
                        Welcome to Intellexal Solutions!
                    </Text>
                    <Text style={{ alignSelf: "center", color: "white", fontSize: 22, fontWeight: "bold", marginBottom: 25 }}>
                        Login to your account
                    </Text>
                    <View style={{ borderRadius: 6, borderColor: "white", borderWidth: 1, marginBottom: 10 }}>
                        <TextInput style={{ paddingHorizontal: 10, color: "white" }} placeholder="User Name" placeholderTextColor='white' onChangeText={(userEmail) => setUserEmail(userEmail)} >

                        </TextInput>
                    </View>

                    <View style={{ borderRadius: 6, marginTop: 10, borderWidth: 1, borderColor: "white", marginBottom: 15 }}>
                        <TextInput style={{ paddingHorizontal: 10, color: "white" }} secureTextEntry placeholder="Password" placeholderTextColor='white' onChangeText={(userPassword) => setUserPssword(userPassword)}>

                        </TextInput>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.5}>

                        <Text style={styles.forgotPasswordTextStyle}>Forgot Password</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => { props.loginAction({ username: userEmail, password: userPassword }, props.tokenState.client_token,props) }}
                        activeOpacity={0.5}>

                        <Text style={styles.buttonTextStyle}>Login</Text>

                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>

    )
}
const mapStateToProps = (state) => ({
    loginState: state.AuthReducer,
    tokenState: state.TokenReducer,
});

const mapDispatchToProps = (dispatch) => ({
    loginAction: (obj, token,props) => dispatch(Login({ type: Actions.LOGIN, data: obj, client_token: token,props:props.navigation})),
    tokenAction: () => dispatch(Token())

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
        padding: 10,

    },

});



