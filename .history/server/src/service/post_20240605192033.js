import db from '../models'

export const getPostsService = () => new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Image, as: 'image', attributes: ['image'] },
            ]
            // attributes: ['id', 'title', 'star', ]
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "Ok" : "Getting posts is Fail",
            response
        })
    } catch (error) {
        reject(error)
    }
})