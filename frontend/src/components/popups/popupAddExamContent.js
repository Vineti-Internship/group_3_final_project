import React from 'react';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";


class PopupAddExamContent extends React.Component {
  render() {
    return (
      <DialogContent>
        <DialogContentText>
          Add exam details
        </DialogContentText>
        <TextField
          id="topic"
          onChange={this.changeHandler}
          autoFocus
          margin="dense"
          label="Exam Topic"
          fullWidth/>
        <TextField
          id="date"
          onChange={this.changeHandler}
          margin="dense"
          label="Exam Date"
          fullWidth/>
      </DialogContent>
    );
  };

  changeHandler = (event) => {
    let data = {};

    data[event.target.id] = event.target.value;

    this.props.sendValueToPopup(data);
  };
}

export default PopupAddExamContent;