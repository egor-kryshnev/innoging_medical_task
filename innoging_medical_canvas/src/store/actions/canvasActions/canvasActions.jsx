export const SET_COLOR = "CANVAS/SET_COLOR";
export const SET_SHAPE = "CANVAS/SET_SHAPE";

export const setColor = (payload) => {
    return {
        type: SET_COLOR,
        payload
    };
};

export const setShape = (payload) => {
    return {
        type: SET_SHAPE,
        payload
    };
};