import _ from 'lodash';
import JasonPlaceHolder from "../api/JasonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState ) => {
    //console.log('About to fetch post');
    await dispatch(fetchPosts());
    //console.log(getState().posts)
    //console.log('fetched posts');
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts =  () => {
    return async (dispatch) => {
        const response = await JasonPlaceHolder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };
    
};
export const fetchUser = (id)=> async (dispatch) => {
        const response = await JasonPlaceHolder.get(`/users/${id}`);
        dispatch({ type: 'FETCH_USER', payload: response.data });
    };
//export const fetchUser = id => dispactch => _fetchUser(id, dispactch);
//const _fetchUser = _.memoize(async (id,dispatch) => {
//        const response = await JasonPlaceHolder.get(`/users/${id}`);
//        dispatch({ type: 'FETCH_USER', payload: response.data });
//   });