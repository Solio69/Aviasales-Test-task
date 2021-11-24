// redux
import { createStore } from 'redux';
import reduser from './redusers';

const store = createStore(reduser);

export default store;
