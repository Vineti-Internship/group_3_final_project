import React from 'react';
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import PopupAddExamContent from "./popupAddExamContent";
import {ADD_COURSE_POPUP, ADD_EXAM_POPUP, EDIT_COURSE_POPUP} from "../../constants/popupConstants";
import PopupAddCourseContent from "./popupAddCourseContent";
import PopupEditCourseContent from "./popupEditCourseContent";


export default class Popup extends React.Component {
  //choose which one popup content should render...............
  addPopupContent = (type = null, open, close, additionalData) => {
    switch (type) {
      case ADD_EXAM_POPUP:
        return (
          <PopupAddExamContent open={open} close={close} type={type}/>
        );
      case ADD_COURSE_POPUP:
        return (
          <PopupAddCourseContent open={open} close={close} type={type}/>
        );
      case EDIT_COURSE_POPUP:
        return (
          <PopupEditCourseContent open={open} close={close} type={type} elementId={additionalData}/>
        );
      default:
        return (
          <div>
            Popup not found
          </div>
        );
    }
  };

  render() {
    const {open, close, type, additionalData} = this.props;

    return (
      <Dialog open={open} onClose={close}>
        {this.addPopupContent(type, open, close, additionalData)}
      </Dialog>
    );
  }
}