import {createStore} from 'redux'
import Reducer from '../Reducer/Reducer'

let store = createStore(Reducer)
export default store



//Why we are passing reducer here?
/*
-> Store needs reducer to know how to update the state when dispatch sends an action
->Reducer gives the latest store(state)
 */
