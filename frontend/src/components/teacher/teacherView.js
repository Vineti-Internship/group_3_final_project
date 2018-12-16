import React from 'react';
import UserInfo from "../userInfo";
import TeacherSectionInfoTable from "./teacherSectionInfoTable";
import ExamsOfSectionTable from "./examsOfSectionTable";
import {open} from "../../actions/popupAction";
import {ADD_EXAM_POPUP} from "../../constants/popupConstants";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

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
          <button onClick={this.addExamClickHandler}>addExam</button>
          <ExamsOfSectionTable/>
        </div>
      </>
    );
  }

  addExamClickHandler = () => {
    this.props.dispatch(open(ADD_EXAM_POPUP));
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(TeacherView);