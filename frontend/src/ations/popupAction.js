import {CLOSE_POPUP, OPEN_POPUP} from "../constants/popupConstants";

export function open(popupType) {
  const state = {
    isOpened:true,
    popupType
  };

  return {type: OPEN_POPUP, state}
}

export function close() {
  const state = {
    isOpened:false,
  };

  return {type: CLOSE_POPUP, state};
}