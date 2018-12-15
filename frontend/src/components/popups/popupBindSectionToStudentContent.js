import React from 'react';
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogTitle from "@material-ui/core/es/DialogTitle";
import Button from "@material-ui/core/es/Button";
import DialogActions from "@material-ui/core/es/DialogActions";
import {dataLoader} from "../../services/apiService";


class PopupBindSectionToStudentContent extends React.Component {

  // contextData = {
  //   admin_id: JSON.parse(localStorage.getItem('user')).id
  // };//To store data from context.............

  sectionId;

  changeHandler = (event) => {
    let data = {};

    data[event.target.id] = event.target.value;

    this.sectionId = data.section_id;
    // this.collectData(data);
  };

  // collectData(data){
  //   for (let key in data){
  //     this.contextData[key] = data[key];
  //   }
  // };

  //Send input values to Back-end and close popup................
  submitHandler = () => {

    dataLoader('addsectionstostudents','POST',this.sectionId, this.props.elementId);
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
            Bind section to student details
          </DialogContentText>
          <TextField
            id="section_id"
            onChange={this.changeHandler}
            autoFocus
            margin="dense"
            label="section id"
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

export default PopupBindSectionToStudentContent;