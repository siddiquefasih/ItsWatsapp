import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Text, View, ActivityIndicator, StatusBar, FlatList, Button, Image, StyleSheet, Pressable, TouchableOpacity, TextInput, Dimensions } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import { useDispatch, useSelector } from "react-redux";
import { ConversationMessageAction, SendConversationMessageAction, ResetCountAction, uploadImageAction } from "../../redux/actions/ConversationAction";
import { getStatusBarHeight } from "react-native-status-bar-height"
import WebSocket from "../../components/WebSocket"
import Colors from "../../config/Colors";
import { transparent } from "react-native-paper/lib/typescript/styles/colors";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { SELECTEDNUMBER } from "../../redux/actions/ActionsTypes"
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import moment from "moment"
import Video from "../../components/react-native-af-video-player-reimplemented/components/Video"
const { height, width } = Dimensions.get("screen")

const ConversationMessage = (props) => {

    const [key, setKey] = useState("1");
    const [caption, setCaption] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    let token = useSelector(state => state.AuthReducer.userToken)
    const socket = WebSocket.getSocket(token);
    let dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    const [loader, setLoader] = useState(true);
    const [messageloader, setMessageLoader] = useState(false);
    const [messages, setMessages] = useState([]);
    const [sendMessage, setSendMessage] = useState('')
    const [imageObj, setImageObj] = useState({})

    const getData = async () => {
        const { data } = props.route.params
        const messages = await ConversationMessageAction(data, token, () => setLoader(false))
        setMessages(messages)
    }

    useEffect(() => {
        socket.on('newConversationMessage', data => {
            console.log(JSON.stringify(data), "socket")
            const data1 = props.route.params.data
            ResetCountAction(token, data1.number)
            if (data) {
                if (data1.id == data[0].receiver_id) {

                    if (data[0].attachments.length)
                        getData()
                    else
                        setMessages([...data, ...messages])
                }
            }

            else {

            }
        });

        return () => {
            socket.removeListener('newConversationMessage');
        };

    }, [messages]);

    useEffect(() => {
        getData()
        return () => dispatch({ type: SELECTEDNUMBER, payload: "" })

    }, [])

    useEffect(() => {
        const { data } = props.route.params
        ResetCountAction(token, data.number)
    }, [])


    const sendMessageAction = () => {
        setMessageLoader(true)
        const { data } = props.route.params
        SendConversationMessageAction(data, token, sendMessage, () => setSendMessage(""), () => setMessageLoader(false))
    }

    const openCameraPicker = () => {
        hideMenu()

        ImagePicker.openPicker({
            mediaType: "photo",
        }).then((image) => {
            setModalVisible(true)
            const imgObj = {
                mime: image.mime,
                path: image.path,
                name: image.path.slice(image.path.lastIndexOf("/") + 1)
            }
            setImageObj(imgObj)
        });
    }

    const sendImage = () => {
        setLoader(true)
        const { number } = props.route.params.data
        uploadImageAction(number, caption, token, imageObj, "image", () => setModalVisible(false), () => setLoader(false))
    }
    const sendVideo = () => {
        setLoader(true)
        const { number } = props.route.params.data
        uploadImageAction(number, caption, token, imageObj, "video", () => setModalVisible(false), () => setLoader(false))
    }

    const openVideoPicker = () => {
        hideMenu()

        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            setModalVisible(true)
            const imgObj = {
                mime: video.mime,
                path: video.path,
                name: video.path.slice(video.path.lastIndexOf("/") + 1)
            }
            setImageObj(imgObj)
        });
    }

    const closeModal = () => {
        setModalVisible(false)
        setImageObj({})
        setCaption('')
    }

    return (
        <ImageBackground style={{ flex: 1, paddingTop: getStatusBarHeight() }} source={require('./../../assets/rainGrey.png')}>
            <StatusBar backgroundColor={"#B71C1C"} barStyle={"light-content"} />
            <Modal
                onBackdropPress={closeModal}
                onBackButtonPress={closeModal}
                isVisible={isModalVisible}>
                <View style={{ backgroundColor: '#f5f5f5', padding: 10, paddingVertical: 25 }}>
                    {
                        imageObj?.mime?.indexOf("image") !== -1 ? <Image
                            source={{ uri: imageObj?.path }}
                            resizeMode="contain"
                            style={{ height: 250, width: "80%", backgroundColor: "#f5f5f5", justifyContent: "center", alignItems: "center", alignSelf: "center" }} /> :
                            imageObj?.mime?.indexOf("video") !== -1 ?
                                <Video
                                    hideFullScreenControl={false}
                                    url={imageObj?.path}
                                    style={{ alignSelf: "center", height: width * .60, width: width * .60, overflow: 'hidden' }
                                    }
                                /> : null
                    }
                    <TextInput
                        value={caption}
                        onChangeText={caption => setCaption(caption)}
                        style={{ margin: 10, marginHorizontal: 5, height: 50, paddingHorizontal: 10, color: "black", borderRadius: 6, borderColor: "#F50057", borderWidth: 1 }}
                        placeholder={"Enter Caption"}
                    />

                    <View style={{ flexDirection: "row", width: "100%" }}>

                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.9}
                            onPress={closeModal}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "white",
                                    textAlign: "center",
                                }}>Cancel</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={imageObj?.mime?.indexOf("image") !== -1 ? sendImage : sendVideo}
                            disabled={loader}
                            activeOpacity={0.5}>

                            {/* {loader ? <ActivityIndicator color="white" size={"small"} /> :  */}
                            {loader ? <ActivityIndicator color="white" size={"small"} />
                                :
                                <Text style={{
                                    fontSize: 18,
                                    color: "white",
                                    textAlign: "center",

                                }} >Send</Text>
                            }
                            {/* } */}
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <View style={{ backgroundColor: "#B71C1C", paddingVertical: 15, paddingHorizontal: 5, flexDirection: "row" }}>
                <TouchableOpacity style={{ marginTop: 15 }}>
                    <Entypo
                        name="chevron-left"
                        size={24}
                        color="white"
                        onPress={() => props.navigation.goBack()}
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: "column" }}>

                    <Text style={{ marginStart: 10, alignSelf: "flex-start", color: "white", fontSize: 18 }}>
                        {props.route.params.data.name}
                    </Text>

                    <Text style={{ marginStart: 10, alignSelf: "flex-start", color: "white", fontSize: 14 }}>
                        {props.route.params.data.number}
                    </Text>
                </View>

            </View>

            {loader ? (<ActivityIndicator size="large" style={{ flex: 1, alignSelf: "center", }} color="#aa0027" />) :
                <FlatList
                    inverted={true}
                    key={key}
                    data={messages}
                    renderItem={({ item, index }) => {
                        let caption = item.message_body
                        let url = ''
                        let type = ''
                        if (item.attachments.length) {
                            const captionObj = item.attachments.find(att => att.attribute_name === "caption")
                            if (captionObj)
                                caption = captionObj.attribute_value
                            else caption = ""
                            //url
                            const urlObj = item.attachments.find(att => att.attribute_name === "url")
                            if (urlObj) url = urlObj.attribute_value
                            //mime
                            const mimeObj = item.attachments.find(att => att.attribute_name === "mime_type")
                            if (mimeObj) type = mimeObj.attribute_value.slice(0, mimeObj.attribute_value.lastIndexOf("/"))
                            const typeObj = item.attachments.find(att => att.attribute_name === "type")
                            if (typeObj) type = typeObj.attribute_value
                        }
                        return (
                            < View
                                key={item.time}
                                style={{ backgroundColor: item.type == 'inbound' ? '#e73859' : "#fff", borderRadius: 8, paddingVertical: 5, paddingHorizontal: 10, margin: 5, alignSelf: item.type == "inbound" ? "flex-start" : "flex-end" }}
                            >
                                {item.type == 'outbound' ? (

                                    <View>
                                        <Text
                                            style={{ color: "#0D47A1", fontSize: 12, textAlign: "left", textTransform: 'capitalize' }}
                                        >
                                            {item.sender_name}
                                        </Text>

                                    </View>
                                ) : null

                                }
                                {type == "image" ? <Image
                                    source={{ uri: url }}
                                    style={{ height: width * .60, width: width * .60 }}
                                    resizeMode="contain"
                                /> : type == "video" ? <Video
                                    url={url}
                                    style={{ height: width * .60, width: width * .60, overflow: 'hidden' }}
                                /> : null}
                                {caption ? <Text style={{ color: item.type == 'inbound' ? "#fff" : "black", fontSize: 12, textAlign: "left" }}>
                                    {caption}
                                </Text> : null}
                                <Text
                                    style={{ color: item.type == 'inbound' ? "#fff" : "black", fontSize: 10, textAlign: "right", marginStart: 25 }}
                                >
                                    {moment(item.dtu).format("MMM D, YYYY")}
                                </Text>

                            </View>
                        )

                    }}
                />}

            <View style={{ flexDirection: "row", width: '100%', alignItems: "center" }}>

                <TextInput
                    placeholder="Type your message "
                    value={sendMessage}
                    onChangeText={(message) => setSendMessage(message)}
                    maxLength={800}
                    style={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "white", margin: 5,
                        flex: 1,
                        height: 50,
                        paddingHorizontal: 10
                    }} />

                <Menu
                    visible={visible}
                    anchor={
                        <TouchableOpacity style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center" }} onPress={showMenu}>
                            <MaterialIcons name={"attach-file"} size={30} />
                        </TouchableOpacity>
                    }
                    onRequestClose={hideMenu}
                >
                    <MenuItem onPress={openCameraPicker}>Image</MenuItem>
                    <MenuItem onPress={openVideoPicker}>Video</MenuItem>
                    <MenuItem onPress={hideMenu}>Audio</MenuItem>
                    <MenuItem onPress={hideMenu}>Document</MenuItem>
                </Menu>
                <TouchableOpacity
                    disabled={loader}
                    onPress={sendMessageAction}
                    style={{ width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                    {messageloader ? <ActivityIndicator size={"small"} color={"#B71C1C"} />
                        :
                        <Ionicons
                            name="md-send-sharp"
                            size={30}
                        />
                    }

                </TouchableOpacity>

            </View>
        </ImageBackground >
    )
}

export default ConversationMessage;



const styles = StyleSheet.create({

    buttonTextStyle: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },

    buttonStyle: {
        backgroundColor: '#F50057',
        color: '#FFFFFF',
        borderWidth: 0,
        borderColor: '#7DE24E',
        borderRadius: 8,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        height: 50,
        justifyContent: "center",
        flex: 1

    },

});