import JasonPlaceHolder from "../api/JasonPlaceHolder";

export const fetchPosts =  () => {
    return async (dispatch) => {
        const response = await JasonPlaceHolder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };
    
};