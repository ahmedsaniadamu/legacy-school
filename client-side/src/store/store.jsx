// redux store setup..
import { createStore , compose , applyMiddleware  } from 'redux' ;
import  thunk  from 'redux-thunk'
import { initialState } from './initialState';
import { reducer } from './reducer';


const middleWire = [ thunk ] ;

//const composer = compose( applyMiddleware(...middleWire) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
//the store
const  store = createStore( reducer, initialState ,applyMiddleware(...middleWire))

export default store ;