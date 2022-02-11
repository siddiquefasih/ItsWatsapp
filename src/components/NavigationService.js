import { CommonActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
    _navigator.dispatch(
        CommonActions.navigate({
            name:routeName,
            params,
        })
    );
}
function reset(index, routes) {
    _navigator.dispatch(
        CommonActions.reset({
            index,
            routes
        })
    );
}
function goBack() {
    _navigator.dispatch(
        CommonActions.goBack()
    );
}

export default {
    navigate,
    goBack,
    reset,
    setTopLevelNavigator,
};