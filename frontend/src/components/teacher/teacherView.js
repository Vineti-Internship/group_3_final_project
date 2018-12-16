import React from 'react';
import UserInfo from "../userInfo";
import TeacherSectionInfoTable from "./teacherSectionInfoTable";

class TeacherView extends React.Component {
  render() {
    return (
      <>
        <UserInfo/>
        <div className='admin-content-component'>
          <h2>All Students of {JSON.parse(window.localStorage.getItem('user')).section.name} Section</h2>

          <TeacherSectionInfoTable/>
        </div>
        <div className='admin-content-component'>
          <h2>All Exams</h2>
          {/*<TeacherSectionInfoTable/>*/}
        </div>
      </>
    );
  }
}

export default TeacherView;