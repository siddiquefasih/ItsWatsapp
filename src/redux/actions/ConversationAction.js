import * as Actions from "../actions/ActionsTypes"
import axios from "axios"


export const ConversationAction = (props) => {

    return async (dispatch) => {
        // console.log(props, "ChatActionn")

        axios.post('https://whatsapp-ent-be.its.com.pk/v1/agent/conversations', {
            page: 0,
            limit: 40

        }, { headers: { "xt-user-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRUb2tlbklkIjoiMjExNDgxZjktYTU4Ni00ZjliLWEwOGItMTNjZDZhZDQ4ZTllIiwiY2xpZW50VXVpZCI6IjkxNjJkNjIwLTQ1NWUtNDAwNi04ZTM5LWNhNmZhZTEyYzA0MCIsImNsaWVudCI6IjEiLCJhY3RvciI6IjEiLCJ1c2VyVG9rZW5JZCI6IjBlZjI3Njc4LWVmYTctNDdhNS1iZGMzLTU2NTI0OTE3MDg3ZiIsInRpbWUiOjE2NDI0ODY5NjMxNzksIm1heF90b2tlbl9jb3VudCI6LTEsImlhdCI6MTY0MjQ4Njk2M30.8j8HcSteCGThT1fqWkmpPBX75NL2z-srkg1rStbiwYU" } })
            .then(response => {
                dispatch({ type: Actions.CONVERSATION, conversationData: response.data.data.customers })
                console.log(response,"ConversationResponse")
            })
            .catch(error => {
                console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
                alert("failed")
            })
    }
}