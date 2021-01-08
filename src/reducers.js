import { CHANGE_FILE_FIELD , CHANGE_LANGUAGE_FIELD } from './constants';
const intialState = {
    fileFiled: '',
    langField: '', 
}

export const getFile = (state = intialState, action = {}) => {  
    console.log(action.type )
    switch (action.type) {
        case CHANGE_FILE_FIELD:
            return Object.assign({}, state, { fileFiled: action.payload });
        case CHANGE_LANGUAGE_FIELD:
            return Object.assign({}, state, { langField: action.payload});
        default:
            return state;
    }
}