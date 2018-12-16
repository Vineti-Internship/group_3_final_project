import React from 'react';
import {dataLoader} from "../../services/apiService";
import DialogTitle from "@material-ui/core/es/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText";
import TextField from "@material-ui/core/es/TextField";
import DialogActions from "@material-ui/core/es/DialogActions";
import Button from "@material-ui/core/es/Button";


class PopupAddExamContent extends React.Component {
  contextData = {
    admin_id: JSON.parse(localStorage.getItem('user')).id,
    section_id: JSON.parse(localStorage.getItem('user')).section.id
  };//To store data from context.............

  changeHandler = (event) => {
    let data = {};

    data[event.target.id] = event.target.value;

    this.collectData(data);
  };

  collectData(data){
    for (let key in data){
      this.contextData[key] = data[key];
    }
  };

  //Send input values to Back-end and close popup................
  submitHandler = () => {
    dataLoader('exams','POST',this.contextData);
    this.props.close();
  };

  render() {
    return (
      <>
        <DialogTitle>
          Popup
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Add exam details
          </DialogContentText>
          <TextField
            id="topic"
            onChange={this.changeHandler}
            autoFocus
            margin="dense"
            label="Exam topic"
            fullWidth/>
          <TextField
            id="date"
            onChange={this.changeHandler}
            margin="dense"
            label="Date"
            fullWidth/>
        </DialogContent>

        <DialogActions>
          <Button onClick={this.props.close} color="primary">
            Cancel
          </Button>
          <Button onClick={this.submitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </>
    );
  }
}

export default PopupAddExamContent;