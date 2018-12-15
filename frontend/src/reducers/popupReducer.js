import {CLOSE_POPUP, OPEN_POPUP} from "../constants/popupConstants";

const initialState = {
  isOpened: false,
  popupType: '',
  data: null
};

const popup = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        isOpened: true,
        popupType: action.state.popupType,
        data: action.state.data
      };
    case CLOSE_POPUP:
      return {
        isOpened: false,
        popupType: '',
        data: null
      };
    default:
      return state;
  }
};

export default popup;