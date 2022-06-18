import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { AuthTypes } from "./action";

export const INITIAL_STATE = Immutable({
    phone :""
})

const loginSuccess = (state, action) => {
    const {phone} = action;
    return state.merge({
        phone: phone,

    })
}

export const reducer = createReducer(INITIAL_STATE,{
    [AuthTypes.LOGIN]: loginSuccess
})