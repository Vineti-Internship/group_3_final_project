import React from 'react';
import ListItem from "@material-ui/core/es/ListItem";
import {ExamInfoListItem} from "./examInfoListItem";
import List from "@material-ui/core/es/List";
import Typography from "@material-ui/core/Typography";

export const ExamsLists = (props) => {
  return (
    <>
      {
        props.examsFakeData.map((item, index) => (
          <div key={index}>
            <Typography variant="h6" color="inherit">
              {item.date}
            </Typography>
            <Typography variant="h6" color="inherit">
              {item.topic}
            </Typography>
            <List>{initTableItems(props.studentsFakeData)}</List>
          </div>))
      }
    </>
  );
};

const initTableItems = (data) => {
  return data.map((element, index) =>
    <ListItem key={index}>
      <ExamInfoListItem data={element}/>
    </ListItem>
  );
};