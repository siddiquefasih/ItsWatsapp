import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Switch, ActionSheetIOS } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { chatHistory } from "../../redux/actions/ChatAction"
import * as Actions from "../../redux/actions/ActionsTypes"

const Chat = (props) => {

    let { chatHistoryData } = props.chatHistoryState
    // const [conversationHistory, setConversationHistory] = useState([])
    useEffect(() => {
        props.chatAction(props.loginState.userToken)
    }, [])

    // useEffect(() => {
    //     setConversationHistory(chatHistoryData)
    // }, [chatHistoryData])

    console.log(chatHistoryData, "ChatPropsssssssssssssssssssssss")

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader heading={"Chat"} navigation={props.navigation} />
            {props.onlineStates.isOnline ? (
                <ScrollView>

                    {chatHistoryData.map(val => {
                        return (
                            <TouchableOpacity key={val.id} style={{ marginVertical: 1, flexDirection: "row", backgroundColor: "#fff", padding: 10, flex: 1 }} onPress={() => props.navigation.navigate("Messages", { data: val })}>

                                <Image style={{ borderRadius: 40, height: 60, width: 60, backgroundColor: "black" }} ></Image>

                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ color: "black", marginStart: 8, marginTop: 8, fontSize: 16 }}>
                                        {val.name}
                                    </Text>
                                    <Text style={{ flex: 1, alignSelf: "flex-end", color: "black", marginStart: 8, marginTop: 4 }}>
                                        {val.last_closed}
                                    </Text>
                                    <Text style={{ color: "black", marginStart: 8, marginTop: 4 }}>
                                        {val.number}
                                    </Text>

                                </View>

                            </TouchableOpacity>
                        )

                    })}

                </ScrollView>
            ) :
                <ImageBackground style={{ flex: 1 }} source={require('./../../assets/rainGrey.png')} />

            }

        </View>

    )
}
const mapStateToProps = (state) => ({
    onlineStates: state.HelperReducer,
    chatHistoryState: state.ChatHistoryReducer,
    loginState: state.AuthReducer

});

const mapDispatchToProps = (dispatch) => ({
    chatAction: (token) => dispatch(chatHistory(token)),
    // tokenAction: () => dispatch(Token())

});


export default connect(mapStateToProps,mapDispatchToProps)(Chat);