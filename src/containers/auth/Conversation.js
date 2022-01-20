import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Switch, ActionSheetIOS } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { ConversationAction } from "../../redux/actions/ConversationAction"


const Conversation = (props) => {

    useEffect(() => {
        props.conversationAction()
    }, [])
    console.log(props.conversationState.conversationData, "ConversationConversation")

    let conversationHistory = props.conversationState.conversationData

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader heading={"Conversation"} navigation={props.navigation} />
            {props.onlineStates.isOnline ? (
                <ScrollView>

                    {conversationHistory.map(val => {
                        return (
                            <TouchableOpacity key={val.id} style={{ marginVertical: 1, flexDirection: "row", backgroundColor: "#fff", padding: 10, flex: 1 }} onPress={() => props.navigation.navigate("Messages", { data: val })}>

                                <Image style={{ borderRadius: 40, height: 60, width: 60, backgroundColor: "grey" }} ></Image>

                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ color: "grey", marginStart: 8, fontSize: 16 }}>
                                        {val.name}
                                    </Text>
                                    <Text style={{ flex: 1, color: "grey", marginStart: 8, marginTop: 4 }}>
                                        {val.dtu}
                                    </Text>
                                    <Text style={{ color: "grey", marginStart: 8, marginTop: 4 }}>
                                        {val.last_message}
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
    conversationState: state.ConversationReducer,
    onlineStates: state.HelperReducer,
    // loginState: state.AuthReducer,

});

const mapDispatchToProps = (dispatch) => ({
    conversationAction: (token) => dispatch(ConversationAction(token))
});
export default connect(mapStateToProps, mapDispatchToProps)(Conversation);