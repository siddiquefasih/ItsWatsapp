import * as Actions from "./ActionsTypes"

export const ShowLoading = () => {

    return async (dispatch) => {
        dispatch({type:Actions.SHOWLOADING ,status:true})

    }
}
export const HideLoading = () => {
    return async (dispatch) => {
         dispatch({type:Actions.HIDELOADING ,status:false})

    }

}