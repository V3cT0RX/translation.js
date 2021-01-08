import { CHANGE_FILE_FIELD, CHANGE_LANGUAGE_FIELD } from "./constants.js"

export const setFileFiled = (File) => ({
    type: CHANGE_FILE_FIELD,
    payload: File
})

export const setLangField = (text) => {
    console.log(text);
    return{
        type: CHANGE_LANGUAGE_FIELD,
        payload:text
    }
}