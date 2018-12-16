import React from 'react';
import UserInfo from "../userInfo";

// import ExamsInfo from "./examsInfoComponent";

class TeacherView extends React.Component {
  render() {
    return (
      <>
        <UserInfo/>
        {/*<SectionInfo studentsFakeData = {this.studentsFakeData}/>*/}
        {/*<ExamsInfo studentsFakeData = {this.studentsFakeData} examsFakeData={this.examsFakeData}/>*/}
      </>
    );
  }
}

export default TeacherView;