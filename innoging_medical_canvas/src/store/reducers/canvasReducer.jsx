import { produce } from "immer";
import { SET_COLOR, SET_SHAPE } from "../actions/canvasActions/canvasActions";

export const canvasDataInitState = {
    color: "",
    shape: ""
}

export const canvasReducer = produce((state, action) => {
    switch (action.type) {
        case SET_COLOR: {
            state.color = action.payload;
            return;
        }
        case SET_SHAPE: {
            state.shape = action.payload;
            return;
        }
        default:
            return state;
    }
}, canvasDataInitState);

export default canvasReducer;