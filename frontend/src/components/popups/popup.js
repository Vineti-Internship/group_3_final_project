import React from 'react';
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import PopupAddExamContent from "./popupAddExamContent";
import {ADD_EXAM_POPUP} from "../../constants/popupConstants";


export class Popup extends React.Component {

  //choose which one popup content should render...............
  addPopupContent = (type = null) => {
    switch (type) {
      case ADD_EXAM_POPUP:
        return (
          <PopupAddExamContent/>
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
    const {open, close, type} = this.props;

    return (
      <Dialog open={open} onClose={close}>
        <DialogTitle>
          Create Exam
        </DialogTitle>
        {this.addPopupContent(type)}
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={close} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}