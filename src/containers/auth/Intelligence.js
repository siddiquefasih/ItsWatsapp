import React, { useState } from "react";
import { Text,StatusBar, View, Image, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomHeader from "../../components/CustomHeader";
import { PieChart, LineChart, ProgressChart } from "react-native-chart-kit";
import CustomNameHeader from "../../components/CustomNameHeader";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Colors from "../../config/Colors";



const Intelligence = ({ navigation }) => {
    const screenWidth = Dimensions.get("window").width;

    const chartConfig = {

        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        useShadowColorFromDataset: false // optional
    };

    let data = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "New York",
            population: 8538000,
            color: "grey",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        }
    ];

    let dashbaordData = [
        { key: 1, count: 4, title: "Daily Active User" },
        { key: 2, count: 4, title: "Weekly Active User" },
        { key: 3, count: 4, title: "Monthly Active User" },
        { key: 4, count: '12/50', title: "Daily Inbound/Outbound" },
        { key: 5, count: '0/0', title: "Weekly Inbound/Outbound" },
        { key: 6, count: '266/277', title: "Monthly Inbound/Outbound" },
    ]

    return (
        <View style={{ flex: 1,paddingTop:getStatusBarHeight() }}>
            <StatusBar
            barStyle="dark-content"
            backgroundColor={Colors.headerBackground}
            />
            <CustomHeader  heading={'Welcome Go Live'} navigation={navigation} />

            <CustomNameHeader heading={'Welcome Go Live'} navigation={navigation} />
            <ScrollView style={{ backgroundColor: "#F5F5F5",}}>


                <View style={{ flexDirection: 'row', flexWrap: "wrap", marginBottom: 15 }}>

                    {dashbaordData.map(val => {
                        return (
                            <View style={{ width: '45%', backgroundColor: "white", borderRadius: 12, borderWidth: 1, borderColor: "#BDBDBD", margin: 10, }}>
                                <View style={{ flex: 0.6, justifyContent: "center", padding: 25 }}>
                                    <Text style={{ textAlign: "center", color: "#F44336", alignSelf: "center" }}>
                                        {val.count}
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3, borderTopWidth: 1, borderTopColor: "#BDBDBD", padding: 15 }}>
                                    <Text style={{ textAlign: "center", fontSize: 12 }}>
                                        {val.title}
                                    </Text>
                                </View>

                            </View>
                        )
                    })
                    }
                    <View style={{ paddingBottom: 5, backgroundColor: "#fff", marginHorizontal: 15, borderRadius: 12 }}>
                        <PieChart
                            data={data}
                            width={screenWidth * 0.93}
                            height={220}
                            chartConfig={chartConfig}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[-5, 0]}
                            absolute
                        />
                    </View>
                </View>



            </ScrollView>

        </View>
    )
}

export default Intelligence;