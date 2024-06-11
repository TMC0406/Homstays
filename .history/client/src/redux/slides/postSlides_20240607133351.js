import {actionTypes} from "../actions/actionTypes";
const initState = {
    post: [],
    msg:''
}

const postSlides = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            console.log("okkkkk123 ");
            return{
                ...state,
                posts: action.posts || [],
                msg: action.msg || ''
            }
        default:
            return state;
    }
}

export default postSlides