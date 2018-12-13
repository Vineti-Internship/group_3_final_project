import React from 'react';
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/es/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import ExamsLists from "./examsLists";
import {open} from "../../ations/popupAction";
import connect from "react-redux/es/connect/connect";
import {ADD_EXAM_POPUP} from "../../constants/popupConstants";

class ExamsInfo extends React.Component {

  addExamClickHandler = () => {
    this.props.dispatch(open(ADD_EXAM_POPUP));
  };

  render() {
    return (
      <>
        <Grid container>
          <Typography variant="h5" color="inherit">
            Exams Info
          </Typography>
          <Fab size="small" onClick={this.addExamClickHandler} color="primary" aria-label="Add">
            <AddIcon/>
          </Fab>
        </Grid>

        <ExamsLists {...this.props}/>
      </>
    );
  }
}

function mapStateToProps(state) {
  const {isOpened, popupType} = state.popup;
  return {
    isOpened,
    popupType
  };
}

export default connect(mapStateToProps)(ExamsInfo);