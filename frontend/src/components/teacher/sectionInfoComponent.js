import React from 'react';
import {SectionInfoListItem} from "./sectionInfoListItem";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import List from "@material-ui/core/es/List/List";

export const SectionInfo = (props) => {
  return (
    <>
      <Typography variant="h5" color="inherit">
        Section Name
      </Typography>

      <List>{initTableItems(props.studentsFakeData)}</List>
    </>
  );
};

const initTableItems = (data) => {
  return data.map((element, index) =>
    <ListItem key={index}>
      <SectionInfoListItem data={element}/>
    </ListItem>
  );
};
