import React from 'react';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogTitle from "@material-ui/core/es/DialogTitle";
import Button from "@material-ui/core/es/Button";
import DialogActions from "@material-ui/core/es/DialogActions";
import {dataLoader} from "../../services/apiService";


class PopupAddStudentContent extends React.Component {

  contextData = {
    admin_id: JSON.parse(localStorage.getItem('user')).id,
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

    dataLoader('students','POST', this.contextData);
    this.props.close();
  };

  render() {
    return (
      <>
        <DialogTitle>
          Add Student
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Add student details
          </DialogContentText>
          <TextField
            id="first_name"
            onChange={this.changeHandler}
            autoFocus
            margin="dense"
            label="First name"
            fullWidth/>
          <TextField
            id="last_name"
            onChange={this.changeHandler}
            margin="dense"
            label="Last name"
            fullWidth/>
          <TextField
            id="email"
            onChange={this.changeHandler}
            margin="dense"
            label="Email"
            fullWidth/>
          <TextField
            id="password"
            onChange={this.changeHandler}
            margin="dense"
            label="Password"
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

export default PopupAddStudentContent;