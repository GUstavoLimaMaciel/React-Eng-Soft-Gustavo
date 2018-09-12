import { combineReducers } from 'redux';
import { SEND_REQUEST } from '../actions/types';

const dadosReducer = (state = {dados: {}}, action) => {
    switch(action.type){
        case SEND_REQUEST:
            console.log(action);
            return { ...state, dados: action.dados}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    consulta: dadosReducer
});

export default rootReducer;