import React from 'react';
import connect from "react-redux/es/connect/connect";
//import TeacherView from "../components/teacher/teacherView";
// import StudentView from "../components/student/studentView";
// import AdminView from "../components/admin/adminView";

class HomePage extends React.Component{
  render() {
    //should render a component depending on user type....................
    return (
      <div>
        {/*<TeacherView />*/}
         {/*<StudentView />*/}
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