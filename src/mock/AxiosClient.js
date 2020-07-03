import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import config from '../config'

const client = () => {
    const client = axios.create({
        baseURL: config.baseUrl,
        responseType: 'json'
    });

    const mockedClient = new MockAdapter(axios);

    mockedClient.onPost('/authorize').reply((config) => {
        const data = JSON.parse(config.data);
        if (!data.username.includes('@gmail.com')) {
            return [404, {message: 'Email or password does not exists.'}]
        }

        if (data.username === 'admin@gmail.com' && data.password === 'admin123') {
            return [200, {access_token: 'access_token'}]
        }

        return [401, {message: 'User is not authorized.'}]
    });

    return axios;
};

export default client;