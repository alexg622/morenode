import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/reducers';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
};

export default configureStore;
