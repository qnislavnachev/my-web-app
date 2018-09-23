import {applyMiddleware, createStore} from "redux";
import {reducer} from "../reducers/CombinedReducer";
import middleware from "./AxiosMiddleware";

const store = createStore(reducer, applyMiddleware(middleware));

export default store