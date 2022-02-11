import React, { useEffect, } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Switch, ActionSheetIOS, ActivityIndicator, ToastAndroid } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { ConversationAction } from "../../redux/actions/ConversationAction"
import { getStatusBarHeight } from 'react-native-status-bar-height';
import CustomNameHeader from "../../components/CustomNameHeader";
import WebSocket from "../../components/WebSocket"
import Toast from 'react-native-toast-message';
import { SELECTEDNUMBER, CONVERSATION, RESETMESSAGECOUNT } from "../../redux/actions/ActionsTypes"
import moment from "moment"

const Conversation = (props) => {
    let token = useSelector(state => state.AuthReducer.userToken)

    const socket = WebSocket.getSocket(token);

    let dispatch = useDispatch()
    useEffect(() => {
        props.navigation.addListener("focus", () => {
            dispatch(ConversationAction(token))

        })
    }, [])

    let loader = useSelector(state => state.ConversationReducer.isLoading)

    let result = useSelector(state => state.ConversationReducer.conversationData)
    let onlineStates = useSelector(state => state.HelperReducer)
    let selectedNumber = useSelector(state => state.ConversationReducer.selectedNumber)

    useEffect(() => {
        socket.on('newConversation', data => {
            if (data) {
                if (selectedNumber !== data.number) {
                    Toast.show(
                        {
                            text1: "You have a new message",
                            type: "success"
                        }
                    )
                }
                const filtered = result.filter(item => item.id !== data.id)
                dispatch({ type: CONVERSATION, conversationData: [data, ...filtered] })


            }
            else {

            }
        });

        return () => {
            socket.removeListener('newConversation');
        };

    }, [selectedNumber, result]);


    return (


        <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
            <CustomHeader navigation={props.navigation} />

            <CustomNameHeader heading={"Conversation"} />
            {onlineStates.isOnline ? (
                loader ? (<ActivityIndicator size="large" style={{ flex: 1, justifyContent: "center", alignContent: "center" }} color="#aa0027" />)
                    :
                    <ScrollView>

                        {result.length > 0 ? (result.map(val => {
                            return (
                                <TouchableOpacity key={val.id} style={{ marginVertical: 1, flexDirection: "row", backgroundColor: "#fff", padding: 10, alignItems: 'center' }}
                                    onPress={() => {
                                        dispatch({ type: SELECTEDNUMBER, payload: val.number })
                                        props.navigation.navigate("ConversationMessage", { data: val })
                                    }}>
                                        <Image style={{borderRadius:250, height: 60, width: 60, marginRight: 10 }} resizeMode={"contain"} source={require('../../assets/user-icon.png')} ></Image>
                                    <View style={{ flexDirection: "row", justifyContent: 'space-between', flex: 1 }}>
                                        <View style={{}} >

                                            <Text style={{ color: "grey", fontSize: 16 }}>
                                                {val.name}
                                            </Text>

                                            {val?.last_message ?
                                                <Text style={{ color: "grey" }}>
                                                    {val.last_message}
                                                </Text> : null}
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                                            {val.message_count != "0" ?
                                                <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: 'red' }}>
                                                    <Text style={{ color: "white", fontSize: 16, textAlign: "right" }}>
                                                        {val.message_count}
                                                    </Text></View> : null}
                                            <Text style={{ color: "grey" }}>
                                                {moment(val.dtu).format("MMM D, YYYY")}
                                            </Text>

                                        </View>
                                    </View>


                                </TouchableOpacity>
                            )

                        })) : null

                        }

                    </ScrollView>


            ) :
                <ImageBackground style={{ flex: 1 }} source={require('./../../assets/rainGrey.png')} />

            }
        </View>

    )
}


export default Conversation