import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/app-reducer';



export default function configureStore() {
 return createStore(
   rootReducer,
   applyMiddleware(thunk)
 );
}