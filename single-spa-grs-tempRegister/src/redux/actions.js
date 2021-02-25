import { UPDATE_LAST_VALUE } from "./actionTypes";

export const updateLastValue = (dispatch, getState) => {
  const currentState = getState();

  dispatch({
    type: UPDATE_LAST_VALUE,
    payload: currentState.lastValue,
  });
};
