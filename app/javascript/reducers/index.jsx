import {combineReducers} from 'redux';
import PostReducer from './reducers_posts';

const allReducers = combineReducers({
  posts: PostReducer
}) 

export default allReducers;