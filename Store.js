import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducers/Videos';
import storage from 'redux-persist/lib/storage';

/*const store = createStore(reducer, {
    suggestionList: [],
    categoryList: []
}); //recibe 3 parametros: reducer, estado inicial y enhaser(opcional)*/

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};