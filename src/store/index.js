import { combineReducers, createStore,applyMiddleware} from 'redux';
import { albumReducer } from './albums';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    albums: albumReducer,
});
let store = createStore(reducers,applyMiddleware(thunk));
export default store;
