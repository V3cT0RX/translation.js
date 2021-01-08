
import { CHANGE_FILE_FIELD } from './constants';
const intialState = {
    fileFiled: '',
}

export const getFile = (state = intialState, action = {}) => {
    switch (action.type) {
        case CHANGE_FILE_FIELD:
            return Object.assign({}, state, { fileFiled: action.payload });
        default:
            return state;

    }
}