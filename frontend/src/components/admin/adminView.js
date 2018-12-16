import React from 'react';
import CoursesTable from "./coursesTable";
import connect from "react-redux/es/connect/connect";
import {open} from "../../actions/popupAction";
import {ADD_COURSE_POPUP, ADD_STUDENT_POPUP, ADD_TEACHER_POPUP} from "../../constants/popupConstants";
import SectionsTable from "./sectionsTable";
import StudentsTable from "./studentsTable";
import TeachersTable from "./teachersTable";
import UserInfo from "../userInfo";

class AdminView extends React.Component {

  render() {
    return (
      <>
        <UserInfo/>
        <div className='admin-content-component'>
          <h2>All Courses</h2>
          <button onClick={this.addCourseClickHandler}>addCourse</button>
          <CoursesTable/>
        </div>
        <div className='admin-content-component'>
          <h2>All Sections</h2>
          <SectionsTable/>
        </div>
        <div className='admin-content-component'>
          <h2>All Students</h2>
          <button onClick={this.addStudentClickHandler}>addStudent</button>
          <StudentsTable/>
        </div>
        <div className='admin-content-component'>
          <h2>All Teachers</h2>
          <button onClick={this.addTeacherClickHandler}>addTeacher</button>
          <TeachersTable/>
        </div>
      </>
    );
  };

  addCourseClickHandler = () => {
    this.props.dispatch(open(ADD_COURSE_POPUP));
  };

  addStudentClickHandler = () => {
    this.props.dispatch(open(ADD_STUDENT_POPUP));
  };

  addTeacherClickHandler = () => {
    this.props.dispatch(open(ADD_TEACHER_POPUP));
  };
}

const mapStateToProps = (state) => {
  const {isOpened, popupType} = state.popup;
  return {
    isOpened,
    popupType
  };
};

export default connect(mapStateToProps)(AdminView);