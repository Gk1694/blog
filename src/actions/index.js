import JasonPlaceHolder from "../api/JasonPlaceHolder";

export const fetchPosts =  () => {
    return async (dispatch) => {
        const response = await JasonPlaceHolder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };
    
};
export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await JasonPlaceHolder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
};