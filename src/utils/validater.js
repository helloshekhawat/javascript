
class checkField {
    constructor
    (fieldValue) {
    if ([fieldValue].some((fieldValue)=> fieldValue.trim()==="")) {
        throw new ApiError(400, "bhai details bh de de mujhe kya kr raha h")
    }
}}

export {checkField}