import db from '../models'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            // include: [
            //     { model: db.Image, as: 'images', attributes: ['image'] },
            // ]
        })
        const response2  = await db.Img.findAll({
            raw: true,
            nest: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "Ok" : "Getting posts is Fail",
            // response : response,
            response2 : response2
        })
    } catch (error) {
        reject(error)
    }
})