import React from 'react';
import CoursesTable from "./coursesTable";
import connect from "react-redux/es/connect/connect";
import {open} from "../../actions/popupAction";
import {ADD_COURSE_POPUP} from "../../constants/popupConstants";

class AdminView extends React.Component {

  render() {
    return (
      <>
        <div className='admin-content-component'>
          <h2>All Courses</h2>
          <button onClick={this.addCourseClickHandler}>addCourse</button>
          <CoursesTable/>
        </div>
        <div className='admin-content-component'>
          <h2>All Sections</h2>
        </div>
        <div className='admin-content-component'>
          <h2>All Students</h2>
        </div>
        <div className='admin-content-component'>
          <h2>All Teachers</h2>
        </div>
      </>
    );
  };

  addCourseClickHandler = () => {
    this.props.dispatch(open(ADD_COURSE_POPUP));
  }
}

const mapStateToProps = (state) => {
  const {isOpened, popupType} = state.popup;
  return {
    isOpened,
    popupType
  };
};

export default connect(mapStateToProps)(AdminView);