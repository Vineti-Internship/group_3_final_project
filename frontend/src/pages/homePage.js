import React from 'react';
import connect from "react-redux/es/connect/connect";
<<<<<<< HEAD
import TeacherView from "../components/teacher/teacherView";
=======
import {TeacherView} from "../components/teacher/teacherView";
>>>>>>> temporary comment student view import
// import {StudentView} from "../components/students/StudentView";

class HomePage extends React.Component{
  render() {
    //should render a component depending on user type....................
    return (
      <div>
        <TeacherView />
        {/* <StudentView /> */}
        {/*<AdminView />*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };