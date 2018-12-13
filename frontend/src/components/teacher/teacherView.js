import React from 'react';
import {SectionInfo} from "./sectionInfoComponent";
import ExamsInfo from "./examsInfoComponent";

class TeacherView extends React.Component {
  studentsFakeData = [
    {
      first_name: 'Aram',
      last_name: 'Aramyan',
      email: 'aram@mail.com',
      examsGrades: [10,9]
    },
    {
      first_name: 'Karapet',
      last_name: 'Karapetyan',
      email: 'karapet@mail.com',
      examsGrades: [6,6]},
    {
      first_name: 'Galust',
      last_name: 'Galstyan',
      email: 'galust@mail.com',
      examsGrades: [7,8]
    },
    {
      first_name: 'Abgar',
      last_name: 'Abgaryan',
      email: 'abgar@mail.com',
      examsGrades: [7,9]
    }
  ];

  examsFakeData = [
    {
      topic: 'topic 1',
      date: '10.12.2018'
    },
    {
      topic: 'topic 2',
      date: '09.10.2018'
    },
    // {
    //   topic: 'topic 3',
    //   date: '12.08.2018'
    // }
  ];

  render() {
    return (
      <>
        <SectionInfo studentsFakeData = {this.studentsFakeData}/>
        <ExamsInfo studentsFakeData = {this.studentsFakeData} examsFakeData={this.examsFakeData}/>
      </>
    );
  }
}

export default TeacherView;