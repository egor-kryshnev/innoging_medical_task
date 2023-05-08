import { setShape, setColor } from "./canvasActions";
import Axios from "axios"

export const fetchColor = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const url = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${process.env.REACT_APP_API_COLOR_ENDPOINT}`;
        try {
            const { data } = await Axios.get(url);
            if(data){
                dispatch(setColor(data))
            }
        } catch (error) {
            console.error(`Failed to fetch color, url:${url}), error:${error}}`);
        }
    }
}

export const fetchShape = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const url = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${process.env.REACT_APP_API_SHAPE_ENDPOINT}`;
        try {
            const { data } = await Axios.get(url);
            if(data){
                dispatch(setShape(data))
            }
        } catch (error) {
            console.error(`Failed to fetch shape, url:${url}), error:${error}}`);
        }
    }
}