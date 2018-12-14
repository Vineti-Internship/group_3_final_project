import React from 'react';
import CoursesTable from "./coursesTable";

export default class AdminView extends React.Component {

  render() {
    return (
      <>
        <div className='admin-content-component'>
          <h3>All Courses</h3>
          <CoursesTable/>
        </div>
        <div className='admin-content-component'>
          <h3>All Sections</h3>
        </div>
        <div className='admin-content-component'>
          <h3>All Students</h3>
        </div>
        <div className='admin-content-component'>
          <h3>All Teachers</h3>
        </div>
      </>
    );
  }
}