import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import { Switch } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons"
import { connect } from "react-redux";
import * as Actions from "../redux/actions/ActionsTypes"
import { OnlineUser, OfflineUser } from '../../src/redux/actions/helperAction'
import Colors from "../config/Colors";

const CustomHeader = (props) => {
    console.log(props.userOnlineState.isOnline, "CustomHeeeeeeeeeeader")

    const onToggleSwitch = () => {
        props.userOnlineState.isOnline ?
            props.offlineUser()
            :
            props.onlineUser()
    }


    return (
        <View style={{ backgroundColor:Colors.headerBackground, padding: 15, flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row" }}>

                <TouchableOpacity>
                    <Ionicons
                        name="menu-outline"
                        size={24}
                        color="black"
                        onPress={() => props.navigation.openDrawer()}
                    />
                </TouchableOpacity>
                
                <Text style={{ marginStart: 15, textAlign: "center", color: "black", fontSize: 16 }}>{props.heading}</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: "center", color: "black", fontSize: 14 }}>Go Online</Text>
                <Switch style={{ alignContent: "flex-end" }} value={props.userOnlineState.isOnline} onValueChange={onToggleSwitch} />
            </View>

        </View>
    )
}

const mapStateToProps = (state) => ({
    userOnlineState: state.HelperReducer
});


const mapDispatchToProps = (dispatch) => ({
    onlineUser: () => dispatch(OnlineUser({ type: Actions.ONLINESTATUS })),
    offlineUser: () => dispatch(OfflineUser({ type: Actions.OFFLINESTATUS })),
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader); 
