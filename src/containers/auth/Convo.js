import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Text, View, ActivityIndicator } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo"
import { useDispatch, useSelector } from "react-redux";
import { ConversationMessageAction } from "../../redux/actions/ConversationAction";
import WebSocket from "../../components/WebSocket"

const ConversationMessage = (props) => {
    const socket = WebSocket.getSocket();
    const [previousMessages, setPreviousMessages] = useState([])
    let messagesRef = useRef(null)

    let token = useSelector(state => state.AuthReducer)
    let result = useSelector(state => state.ConversationMessageReducer.conversationMessages)
    let loader = useSelector(state => state.ConversationMessageReducer.isLoading)
    let dispatch = useDispatch();

    useEffect(() => {
        props.navigation.addListener("focus", () => {
            dispatch(ConversationMessageAction(props.route.params.data, token))

        })
    }, [])

    useEffect(() => {
        setPreviousMessages([...result])

    }, [result])

    useEffect(() => {

        socket.on('newConversationMessage', data => {
            if (data) {
                let _message = [data[0]];

                // setUserMessages([previousMessages, ..._message])
                messagesRef = [...previousMessages, _message]
                console.log(messagesRef, 'CombinedmessageRef==============>>>>>>>>>>>>>>>>>>')
            }
            else {
                messagesRef=[previousMessages]

                console.log(messagesRef, 'PreviousMessageReference')

            }
        });

        return () => {
            // socket.removeListener('newConversation');
            socket.removeListener('newConversationMessage');
            // socket.removeListener('updateMessageStatus');
            // socket.removeListener('removeConversation');
            // socket.removeListener('updateCustomerMessages');
            // EventEmitter.unsubscribe('Online');
        };

    }, []);

    // useEffect(() => {
    //     if (message) {
    //         const _message = message[0]
    //         let _messages = [...result, ..._message]
    //         setUserMessages([_messages])
    //         console.log(_messages, "_messages_messages_messages_messages");
    //     }

    // }, [message])

    console.log(userMessages, "USERMESSAGESSSSSSSSSSUSERMESSAGESSSSSSSSSS");

    return (

        <ImageBackground style={{ flex: 1 }} source={require('./../../assets/rainGrey.png')}>
            <View style={{ backgroundColor: "#B71C1C", paddingVertical: 15, paddingHorizontal: 5, flexDirection: "row" }}>
                <TouchableOpacity>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color="white"
                        onPress={() => props.navigation.navigate("Conversation")}
                    />
                </TouchableOpacity>
                <Text style={{ marginStart: 10, textAlign: "center", color: "white", fontSize: 18 }}>
                    {props.route.params.data.name}
                </Text>
            </View>

            {loader ? (<ActivityIndicator size="large" style={{ flex: 1, alignSelf: "center", }} color="#aa0027" />) :
                <ScrollView>

                    {messagesRef.length > 0 ? (messagesRef.map(val => {
                        return (
                            < View key={val.time} style={{ backgroundColor: val.type == 'inbound' ? '#e73859' : "#fff", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 10, margin: 5, alignSelf: val.type == "inbound" ? "flex-start" : "flex-end" }}>
                                {val.type == 'outbound' ? (

                                    <View>
                                        <Text style={{ color: "#0D47A1", fontSize: 12, textAlign: "left", textTransform: 'capitalize' }}>
                                            {val.sender_name}
                                        </Text>
                                    </View>
                                ) : null

                                }
                                <Text style={{ color: val.type == 'inbound' ? "#fff" : "black", fontSize: 12, textAlign: "left" }}>
                                    {val.message_body}
                                </Text>
                                <Text style={{ color: val.type == 'inbound' ? "#fff" : "black", fontSize: 10, textAlign: "right", marginStart: 25 }}>
                                    {val.dt}
                                </Text>

                            </View>
                        )

                    })) : <Text></Text>

                    }
                </ScrollView>}

            <View style={{ backgroundColor: "white", borderRadius: 12, borderWidth: 1, borderColor: "white", margin: 5 }}>
                <TextInput placeholder="Type your message " style={{ color: "black" }}>

                </TextInput>
            </View>
        </ImageBackground >
    )
}

export default ConversationMessage;