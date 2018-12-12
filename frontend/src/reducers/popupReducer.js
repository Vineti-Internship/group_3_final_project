import {CLOSE_POPUP, OPEN_POPUP} from "../constants/popupConstants";

const initialState = {
  isOpened: false,
  popupType: ''
};

export function popup(state = initialState, action) {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        isOpened: true,
        popupType: action.state.popupType
      };
    case CLOSE_POPUP:
      return {
        isOpened: false,
        popupType: ''
      };
    default:
      return state;
  }
}