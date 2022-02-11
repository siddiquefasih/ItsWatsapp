import * as Actions from "../actions/ActionsTypes"
import axios from "axios"
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers"
import { baseUrl } from "../../components/AppUrl"

export const chatHistory = (token) => {
    console.log(token, "tokentokentokentoken")
    return async (dispatch) => {
        dispatch({type:Actions.LOADING});   
        axios.post(`${baseUrl}agent/history/conversations`, {
            page: 0,
            limit: 20

        }, { headers: { "xt-user-token": token } })
            .then(response => {
                dispatch({ type: Actions.CHATHISTORY, chatHistoryData: response.data.data.customers.customers })
            })
            .catch(error => {
                alert("failed")
            })
    }
}

export const HistoryMessage = (token, data) => {
   
    // console.log(data.route.params.data.name, "ChatTokennnnnn")
    return async (dispatch) => {
        dispatch({type:Actions.LOADING});
        axios.post(`${baseUrl}agent/history/chat`, {
            number: data.route.params.data.number,
            start_date: null,
            last_closed: data.route.params.data.last_closed,
            page: 0,
            limit: 40
        }, { headers: { "xt-user-token": token } })
            .then(response => {

                dispatch({
                    type: Actions.HISTORYMESSAGES, HistoryMessages: response.data.data.chat,
                })

            })
            .catch(error => {
                console.log(error, "History Chat ERRRRRRRRRRRRRRRRROr")
                alert("failed")
                dispatch({
                })
            })
    }
}


