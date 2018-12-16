import React from 'react';
import UserInfo from "../userInfo";
import SectionsForStudentTable from "./sectionsForStudentTable";

export default class StudentView extends React.Component {

  render() {
    return (
      <>
        <UserInfo/>
        <div className='admin-content-component'>
          <h2>All Sections</h2>
          <SectionsForStudentTable/>
        </div>
      </>
    );
  }
}