import * as Actions from "../actions/ActionsTypes"
import axios from "axios"
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers"

export const chatHistory = (token) => {

    return async (dispatch) => {

        axios.post('https://whatsapp-ent-be.its.com.pk/v1/agent/history/conversations', {
            page: 0,
            limit: 20

        }, { headers: { "xt-user-token": token } })
            .then(response => {
                dispatch({ type: Actions.CHATHISTORY, chatHistoryData: response.data.data.customers.customers })
                console.log(response.data,"HELLLLLLLLLLLLLLLL")
            })
            .catch(error => {
                console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
                alert("failed")
            })
    }
}



export const HistoryMessage = (props) => {
    // console.log(data, "ChatTokennnnnn")
    return async (dispatch) => {
        axios.post('https://whatsapp-ent-be.its.com.pk/v1/agent/history/chat', {
            number: "923463555878",
            start_date: null,
            last_closed: "jan 10,2022",
            page: 0,
            limit: 40
        }, { headers: { "xt-user-token": props.loginState.userToken } })
            .then(response => {
                // alert("Succes")
                console.log(response.data, "MessageActionn")
                dispatch({ type: Actions.HISTORYMESSAGES, HistoryMessages: response.data.data })
            })
            .catch(error => {
                console.log(error, "History Chat ERRRRRRRRRRRRRRRRROr")
                alert("failed")
            })
    }
}


