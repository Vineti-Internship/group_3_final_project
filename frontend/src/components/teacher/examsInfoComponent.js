import React from 'react';
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/es/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import {ExamsLists} from "./examsLists";

export const ExamsInfo = (props) => {
  return (
    <>
      <Grid container >
        <Typography variant="h5" color="inherit">
          Exams Info
        </Typography>
        <Fab size="small" onClick={addExamClickHandler} color="primary" aria-label="Add">
          <AddIcon/>
        </Fab>
      </Grid>

      <ExamsLists {...props}/>
    </>
  );
};

const addExamClickHandler = () => {
  //should open popup to add date and topic of exam......................
};