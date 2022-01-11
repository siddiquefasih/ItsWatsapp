import React from "react";
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Switch } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const Chat = ({ navigation }) => {
    let chatData = [
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Fahad", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Zohaib", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Rabeet", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Uzair", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Fareed", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Fahad", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Ali", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Ahad", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Jahanzaib", message: "Hello How Are You" },
        { image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Amsterdam_(NL),_Spui_--_2015_--_7227.jpg", name: "Fahad", message: "Hello How Are You" },

    ]
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader heading={"Chat"} navigation={navigation} />
            <ScrollView>

            {chatData.map(val => {
                return (
                        <TouchableOpacity style={{ marginVertical: 1, flexDirection: "row",backgroundColor:"#fff",padding:10}} onPress={()=>navigation.navigate("Messages",{data:val})}>

                            <Image style={{ borderRadius: 40, height: 60, width: 60 }} source={{ uri: val.image }}></Image>
                            <View style={{ flexDirection: "column" }}>

                                <Text style={{ color: "black", marginStart: 8,marginTop:8, fontSize: 16 }}>
                                    {val.name}
                                </Text>
                                <Text style={{ color: "black", marginStart: 8,marginTop:4 }}>
                                    {val.message}
                                </Text>
                            </View>

                        </TouchableOpacity>
                )

            })
            }
                    </ScrollView>

        </View>

    )
}

export default Chat;