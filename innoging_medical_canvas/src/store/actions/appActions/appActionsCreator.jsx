import { fetchShape, fetchColor } from "../canvasActions/canvasActionsCreators";

export const initAppActionCreator = () => {
    return async (dispatch) => {
      await dispatch(fetchColor());
      await dispatch(fetchShape());
    };
  };