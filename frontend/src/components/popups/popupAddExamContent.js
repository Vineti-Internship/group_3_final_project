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
          autoFocus
          margin="dense"
          label="Exam Topic"
          fullWidth/>
        <TextField
          margin="dense"
          label="Exam Date"
          fullWidth/>
      </DialogContent>
    );
  }
}

export default PopupAddExamContent;