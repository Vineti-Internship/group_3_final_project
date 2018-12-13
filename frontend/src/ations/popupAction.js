import {CLOSE_POPUP, OPEN_POPUP} from "../constants/popupConstants";

export const open = (popupType) => {
  const state = {
    isOpened:true,
    popupType
  };

  return {type: OPEN_POPUP, state}
};

export const close = () => {
  const state = {
    isOpened:false,
  };

  return {type: CLOSE_POPUP, state};
};