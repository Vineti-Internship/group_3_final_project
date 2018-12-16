import React from 'react';
import connect from "react-redux/es/connect/connect";
import TeacherView from "../components/teacher/teacherView";
import StudentView from "../components/student/studentView";
import AdminView from "../components/admin/adminView";

class HomePage extends React.Component {
  render() {
    //should render a component depending on user type....................
    const user = JSON.parse(localStorage.getItem('user'));
    let view;

    switch (user.type_id) {
      case 1: {
        view = <AdminView/>;
        break;
      }
      case 2: {
        view = <TeacherView/>;
        break;
      }
      case 3: {
        view = <StudentView/>;
        break;
      }
      default: {
        view = <>Wrong TypeId</>
      }
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {loggingIn} = state.authentication;
  return {
    loggingIn
  };
};


export default connect(mapStateToProps)(HomePage);