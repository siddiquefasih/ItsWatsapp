import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Switch, ActionSheetIOS,ActivityIndicator } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { chatHistory } from "../../redux/actions/ChatAction"
import { useSelector,useDispatch } from "react-redux";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Chat = (props) => {

    let dispatch = useDispatch();
    useEffect(() => {
        props.navigation.addListener("focus", () => {
            dispatch(chatHistory(loginState.userToken))
        })
    },[])
    let loader = useSelector(state => state.ChatHistoryReducer.isLoading)
    let result = useSelector(state=> state.ChatHistoryReducer.chatHistoryData )
    let onlineStates = useSelector(state=> state.HelperReducer )
    let loginState = useSelector(state=> state.AuthReducer )
    // let[load,setLoader] = useState(loader);

    console.log(result,"statestatestatestate");
    return (
        <View style={{ flex: 1,paddingTop:getStatusBarHeight() }}>
            <CustomHeader heading={"Chat"} navigation={props.navigation} />
            {onlineStates.isOnline ? (

                <ScrollView>
                { loader ? ( <ActivityIndicator size="large" style={{flex:1,justifyContent:"center",alignContent:"center"}}color="#aa0027"/>  ) :

                     result.length > 0 ? ( result.map(val => {
                        return (
                            <TouchableOpacity key={val.id} style={{ marginVertical: 1, flexDirection: "row", backgroundColor: "#fff", padding: 10, flex: 1 }} onPress={() => props.navigation.navigate("Messages", { data: val })}>

                                <Image style={{ borderRadius: 40, height: 60, width: 60, backgroundColor: "black" }} ></Image>

                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ color: "black", marginStart: 8, marginTop: 8, fontSize: 16 }}>
                                        {val.name}
                                    </Text>
                                    <Text style={{ flex: 1, alignSelf: "flex-end", color: "black", marginStart: 8, marginTop: 4 }}>
                                    </Text>
                                    <Text style={{ color: "black", marginStart: 8, marginTop: 4 }}>
                                        {val.number}
                                    </Text>

                                </View>

                            </TouchableOpacity>
                        )

                    })
                    ) :null 
                }
                    
            {/* } */}
                </ScrollView>
            ) :
                <ImageBackground style={{ flex: 1 }} source={require('./../../assets/rainGrey.png')} />

            }

        </View>

    )
}

// const mapDispatchToProps = (dispatch) => ({
//     chatAction: ({ token, isLoading }) => dispatch(chatHistory({ token, isLoading })),
//     // tokenAction: () => dispatch(Token())

// });


export default Chat;