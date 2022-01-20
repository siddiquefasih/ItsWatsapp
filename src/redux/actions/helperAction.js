import * as Actions from "../actions/ActionsTypes"

export const OnlineUser = () => {

    return async (dispatch) => {
        dispatch({type:Actions.ONLINESTATUS ,status:true})

    }
}
export const OfflineUser = () => {
    return async (dispatch) => {
         dispatch({type:Actions.OFFLINESTATUS ,status:false})

    }

}