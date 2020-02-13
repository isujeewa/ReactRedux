import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
 
// register middlewares
const middleware = applyMiddleware(reduxThunk);
 
const store = createStore(reducers, middleware);
 
export default store;