import {CLOSE_POPUP, OPEN_POPUP} from "../constants/popupConstants";

export const open = (popupType, data = null) => {
  const state = {
    isOpened: true,
    popupType,
    data
  };

  return {type: OPEN_POPUP, state}
};

export const close = () => {
  const state = {
    isOpened: false,
    data: null
  };

  return {type: CLOSE_POPUP, state};
};