import axiosConfig from "../axiosConfig"

const apiRegister = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export default apiRegister