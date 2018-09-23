import {combineReducers} from "redux";
import client from "../mock/AxiosClient";

const authorizationReducer = (state=[], action) => {
    if (action.type === 'AUTHORIZE') {
        const data = action.request.data;

        client().post('/authorize', JSON.stringify(data))
            .then((response) => {
                state = {...state, autorizations: autorizations.push({userId: response.data.userId, authorized: true})}
            }).catch((error) => {

            })
    }
};

export const reducer = combineReducers({
    authorizations: authorizationReducer
});