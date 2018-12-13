import React from 'react';
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import PopupAddExamContent from "./popupAddExamContent";
import {ADD_EXAM_POPUP} from "../../constants/popupConstants";


export class Popup extends React.Component {

  contextData = {};//To store data from context.............

  //choose which one popup content should render...............
  addPopupContent = (type = null) => {
    switch (type) {
      case ADD_EXAM_POPUP:
        return (
          <PopupAddExamContent sendValueToPopup={this.getEnteredValuesFromContent}/>
        );
      default:
        return (
          <div>
            Popup not found
          </div>
        );
    }
  };

  //Get input values from child component..................
  getEnteredValuesFromContent = (data) => {
    for (let key in data){
      this.contextData[key] = data[key];
    }
  };

  //Send input values to Back-end and close popup................
  submitHandler = () => {
    //ToDo ~call function from backend and send this.contextData................
    this.props.close();
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
          <Button onClick={this.submitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}