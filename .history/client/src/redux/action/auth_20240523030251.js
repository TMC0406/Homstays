import { type } from 'os'
import actionType from './actionTypes'
import { apiRegister } from '../../service/auth'

export const register = (payload) => async (dipatch) => {
    try {
        const response = await apiRegister(payload)
        if (response.data.error === 0) {
            dipatch({
                type: actionType.REGISTER,
                data: response.data.token
            })
        }else{
            dipatch({
                type: actionType.REGISTER,
                data: response.data.msg
            })
        }
    } catch (error) {
        dipatch({
            type: actionType.REGISTER,
            data: null
        })
    }
}