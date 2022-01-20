import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Text, Avatar } from "react-native-paper";
import {
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import DrawerButon from "../../components/DrawerButton";
let vh = Dimensions.get('window').height
let vw = Dimensions.get('window').width
import { connect } from 'react-redux';

const DrawerContent = (props) => {
    //  console.log(props.loginState.userData.email, '=====================loginState')

    return (
        <View style={{ flex: 1 }}>

            <View style={{ height: "30%", backgroundColor: "#e73859" }}>

                <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                   
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={require('./../../assets/itsAppLogo.png')} style={{ marginStart: 10, width: 25, height: 25, marginEnd: 15 }}
                        />

                        <Text style={{ color: "white", fontSize: 16 }}>
                            ITS - WHATSAPP
                        </Text>
                    </View>
                    <EvilIcons
                        name="navicon"
                        size={25}
                        color={'white'}
                    />

                </View>

                <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>
                            {props.loginState.userData.firstName}
                        </Text>
                        <Text style={styles.textStyle}>
                            {props.loginState.userData.lastName}
                        </Text>
                    </View>

                    <Text style={styles.textStyle}>
                       {props.loginState.userData.email}
                    </Text>

                </View>
                <View style={{ position: 'absolute', bottom: -vh * 0.05, alignItems: 'center', width: '100%' }}>
                    <View style={{ backgroundColor: '#fff', borderRadius: 50, padding: 3, paddingVertical: 7 }}>
                        <Avatar.Image
                            style={{ marginHorizontal: 4 }}
                            source={({uri:props.loginState.userData.image})}
                            size={60}
                        />
                    </View>

                </View>

            </View>

            <DrawerContentScrollView>

                <View style={{ marginStart: vw * 0.065, marginTop: vh * 0.05, marginBottom: 2 }}>
                    <Text style={{ fontSize: 18, color: "#757575" }}>
                        Navigation
                    </Text>
                </View>

                <View style={{ marginEnd: 15, marginTop: 5 }}>

                    <DrawerButon heading="Intelligence" iconType={'dashboard'} navigate={_ => props.navigation.navigate('Intelligence')} />
                    <DrawerButon heading="Chat History" iconType={'chat'} navigate={_ => props.navigation.navigate('Chat')} />
                    <DrawerButon heading="Conversation" iconType={'chat'} navigate={_ => props.navigation.navigate('Conversation')} />
                    <DrawerButon heading="Contact Book" iconType={'contact'} />
                    <DrawerButon heading="Reports" iconType={'assest'} />
                    <DrawerButon heading="Settings" iconType={'setting'} />
                </View>

            </DrawerContentScrollView>

        </View>
    )
    
}

const mapStateToProps = (state) => ({
    loginState: state.AuthReducer
});

// //count to be initialized
// const mapDispatchToProps = (dispatch) => ({
    
// });
const styles = StyleSheet.create({
    
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
    },
    userInfoSection: {
        backgroundColor: '#e73859',
        marginTop: 0,
        height: "30%"
    },
    drawerContent: {
    },
    textStyle: {
        color: "white",
        marginTop: 10,
        marginEnd: 5
    },
});






export default connect(mapStateToProps)(DrawerContent);