import { CHANGE_FILE_FIELD } from "./constants.js"

export const setFileFiled = (File) => ({
    type: CHANGE_FILE_FIELD,
    payload: File
})