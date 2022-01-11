import React from "react";
import { ImageBackground, Text, View } from "react-native"
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import CustomHeader from "../../components/CustomHeader";
import Entypo from "react-native-vector-icons/Entypo"

const Messages = ({ navigation, route }) => {
    const { params } = route
    const { data } = params
    let MessageData = [
        { date: "12/12/21 1:05 Am", message: 'Hello, How Are You ', type: 'inbound' },
        { date: "12/12/21 1:06 Am", message: 'I am fine Thank you , what abaout You', type: 'outbound' },
        { date: "12/12/21 1:07 Am", message: 'Same as you but ', type: 'inbound' },
        { date: "12/12/21 1:08 Am", message: 'its Okay , every thing will become good ', type: 'outbound' },
        { date: "12/12/21 1:09 Am", message: 'Ok Bye', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'See You Later', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'See You', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'Have Fun', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'Ta ta', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'Bye Bye', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'inbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'outbound'},
        { date: "12/12/21 1:10 Am", message: 'You too', type: 'inbound'},
    ]
    return (
        <ImageBackground style={{ flex: 1 }} source={require('./../../assets/rainGrey.png')}>
            <View style={{ backgroundColor: "#B71C1C", paddingVertical: 15, paddingHorizontal: 5, flexDirection: "row" }}>
                <TouchableOpacity>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color="white"
                        onPress={() => navigation.navigate("Chat")}
                    />
                </TouchableOpacity>
                <Text style={{ marginStart: 10, textAlign: "center", color: "white", fontSize: 18 }}>
                    {data.name}
                </Text>
            </View>
            <ScrollView>
                {MessageData.map(val => {
                    return (
                        < View style={{ backgroundColor: val.type == 'inbound' ? '#e73859' : "#fff", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 10, margin: 5, alignSelf: val.type == "inbound" ? "flex-start" : "flex-end" }}>
                            <Text style={{ color: val.type == 'inbound' ? "#fff" : "black", fontSize: 12, textAlign: "left" }}>
                                {val.message}
                            </Text>
                            <Text style={{ color: val.type == 'inbound' ? "#fff" : "black", fontSize: 10, textAlign: "right", marginStart: 25 }}>
                                {val.date}
                            </Text>

                        </View>
                    )

                })
                }
            </ScrollView>

            <View style={{ backgroundColor: "#fff" }}>

                <TextInput style={{}} placeholder="Enter Here">

                </TextInput>
            </View>

        </ImageBackground >
    )
}
export default Messages;

