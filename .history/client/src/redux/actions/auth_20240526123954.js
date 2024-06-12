import actionTypes from './actionTypes'
import { apiRegister, apiLogin } from '../../service/auth'

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            })
        }else{
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: null
        })
    }
}
export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.error === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token
            })
        }else{
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null
        })
    }
}
<<<<<<< HEAD
=======

>>>>>>> 3348b221db88c0c56ff3d59211103958ef0569db
export const logout = () => ({
    type: actionTypes.LOGOUT
})