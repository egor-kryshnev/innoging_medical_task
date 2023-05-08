import { createSelector } from "reselect";
import store from "../../store";

export const getColor = (state = store.getState()) => state.canvas.color; 
export const getShape = (state = store.getState()) => state.canvas.shape; 