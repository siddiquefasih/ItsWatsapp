import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import io from "socket.io-client"
import { useSelector, useDispatch } from "react-redux";

const URL = 'https://wentterminus.its.com.pk'

class WebSocket {
    static socket = null
    static initializeSocket = token => {
        let check = false

        if (token) {
            if (!WebSocket.socket) {
                WebSocket.socket = io(URL, {
                    query: {
                        token: token,
                    },
                });
            }
            check = true
            WebSocket.socket.on("connect", (data) => {
                console.log("Succes");
            })

            WebSocket.socket.on("disconnect", () => {
                WebSocket.socket = null
                console.log("disconnect");
            })
        }

        return check
    }
    

    static getSocket = (token) => {
        if (!WebSocket.socket) {
            if (!WebSocket.initializeSocket(token)) {
                return null
            }
        }
        return WebSocket.socket
    }


}

export default WebSocket
