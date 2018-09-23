import client from "../mock/AxiosClient";
import axiosMiddleware from 'redux-axios-middleware';

const middleware = axiosMiddleware(client);

export default middleware