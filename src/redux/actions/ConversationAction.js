import * as Actions from "../actions/ActionsTypes"
import axios from "axios"
import { baseUrl } from "../../components/AppUrl"



export const ConversationAction = (token) => {

    return async (dispatch) => {
        dispatch({ type: Actions.LOADING });

        axios.post(`${baseUrl}agent/conversations`, {
            page: 0,
            limit: 40

        }, { headers: { "xt-user-token": token } })
            .then(response => {
                dispatch({ type: Actions.CONVERSATION, conversationData: response.data.data.customers })
            })
            .catch(error => {
                console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
                alert("failed")
            })
    }
}

export const ResetCountAction = (token, number) => {

    // console.log(token, number, "ResetAction");

    axios.get(`${baseUrl}messages/reset/${number}`,
        { headers: { "xt-user-token": token } })
        .then(response => {
            // console.log(response, "COunttttt");
        })
        .catch(error => {
            console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
            alert(error)
        })
}

export const ConversationMessageAction = (data, token, loader) => {
    return axios.post(`${baseUrl}agent/get/chat`, {
        "number": data.number,
        "start_date": null,
        "last_closed": data.last_closed,
        "page": 0,
        "limit": 40
    }, { headers: { "xt-user-token": token } })
        .then(response => {
            loader()
            const messages = response.data.data.chat
            return messages
        })
        .catch(error => {
            console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
            loader()
            alert("failed")
            return []
        })
}
export const uploadImageAction = (number, caption, token, imgObj,type,success,loader) => {
    const img = {
        name: imgObj.name,
        uri: imgObj.path,
        type: imgObj.mime
    }
    let params = new FormData()
    params.append("file", img)
    alert(JSON.stringify(params))

    axios.post(`https://upload.its.com.pk/v1/upload`, params, { headers: { "xt-api-key": "cc6ab176-e84c-4684-85a6-dffe952715e3" }})
        .then((response) => {
            const url = "https://upload.its.com.pk/v1/fetch/file/" + response.data.data.file
            const body = {
                type,
                [type]: {
                    to: [
                        number
                    ],
                    message: {
                        url: url,
                        caption: caption,
                        filename: imgObj.name,
                        mime_type: imgObj.mime
                    }
                }
            }
            axios.post("https://wentterminus.its.com.pk/v1/messages/send/"+type, body, { headers: { "xt-user-token": token } })

                .then(res => {
                    success()
                    loader()
                }).catch(err => {
                    loader()
                    alert(err.message)
                })
        })
        .catch(err => {
            loader()
            alert(err.message)
        })
    // , {
    //     type: "image",
    //     image: {
    //         "to": [
    //             data.number
    //         ],
    //         message: {

    //             "url": imgObj.path,
    //             "caption": "",
    //             "filename": imgObj.name,
    //             "mime_type": imgObj.mime

    //         }
    //     }
    // }, { headers: { "xt-api-key": "cc6ab176-e84c-4684-85a6-dffe952715e3" } })
    //     .then(response => {
    //         const messages = response.data.data.filename
    //         return messages
    //     })
    //     .catch(error => {
    //         console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
    //         alert("failed")
    //         return []
    //     })
}

export const SendConversationMessageAction = (data, token, message, setMessageEmpty, messageloader) => {

    // console.log(data.number, token, "ghjhjkhjhjk")
    axios.post(`${baseUrl}messages/send/text`, {
        type: 'text',
        text: {
            "to": [data.number],
            message: {
                text: message
            }
        }
    }, { headers: { "xt-user-token": token } })
        .then(response => {
            // console.log("Succes", response);
            setMessageEmpty()
            messageloader()
        })
        .catch(error => {
            console.log(error, "Chat ERRRRRRRRRRRRRRRRROr")
            alert("failed")
            messageloader()
        })

}
