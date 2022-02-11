import React, { useEffect,useState } from "react";
import { ImageBackground, Text, View, ActivityIndicator } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo"
import { connect, useDispatch, useSelector } from "react-redux";
import { HistoryMessage } from "../../redux/actions/ChatAction";

const Messages = (props) => {
    let loader = useSelector(state => state.HistoryMessageReducer.isLoading)
    let result = useSelector(state => state.HistoryMessageReducer.HistoryMessages)
    let loginState = useSelector(state => state.AuthReducer)

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(HistoryMessage(loginState.userToken, props))
    }, [])


    console.log(loader, "loaderProps")


    console.log(result, "MessagesProps")

    return (

        <ImageBackground style={{ flex: 1,marginTop:20 }} source={require('./../../assets/rainGrey.png')}>
            <View style={{ backgroundColor: "#B71C1C", paddingVertical: 15, paddingHorizontal: 5, flexDirection: "row" }}>
                <TouchableOpacity>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color="white"
                        onPress={() => props.navigation.navigate("Chat")}
                    />
                </TouchableOpacity>
                <Text style={{ marginStart: 10, textAlign: "center", color: "white", fontSize: 18 }}>
                    {props.route.params.data.name}
                </Text>
            </View>

        { loader ?   ( <ActivityIndicator size="large" style={{flex:1,alignSelf:"center",}}color="#aa0027"/> ) :  

        <ScrollView>

                {result.length > 0 ? (result.map(val => {
                    return (
                        < View style={{ backgroundColor: val.type == 'inbound' ? '#e73859' : "#fff", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 10, margin: 5, alignSelf: val.type == "inbound" ? "flex-start" : "flex-end" }}>
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

        </ImageBackground >
    )
}

export default Messages;

