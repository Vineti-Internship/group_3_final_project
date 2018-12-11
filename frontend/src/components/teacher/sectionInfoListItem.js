import React from 'react';
import ListItemText from "@material-ui/core/es/ListItemText";

export const SectionInfoListItem = (props) => {
  return (
    <>
      <ListItemText primary={`${props.data.first_name} ${props.data.last_name}`}/>
      <ListItemText primary={props.data.email}/>
    </>
  );
};