import store from '../../store/ReduxStore'

export default function authorize(email, password) {
    store.dispatch({
        type: 'AUTHORIZE',
        payload: {
            request: {method: 'POST', url: '/authorize', data: {email: email, password: password}}
        }
    })
}