import React from 'react';
import {dataLoader, EVENT_DATA_SHOULD_UPDATE} from "../../services/apiService";
import TeacherSectionInfoTableItem from "./teacherSectionInfoTableItem";

class TeacherSectionInfoTable extends React.Component {
  state = {
    data: {}
  };

  constructor(props) {
    super(props);
    document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

  loadData = async () => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    const data = await dataLoader('sections', 'GET', null, user.section.id);

    this.initTableItems(data.students);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><TeacherSectionInfoTableItem data={element}/></li>
    );

    this.setState({
      listItems: listItems
    });
  };

  render() {
    return (
      <div className='table-component'>
        <ul>{this.state.listItems}</ul>
      </div>
    );
  }

  componentDidMount() {
    this.loadData();
  }
}

export default TeacherSectionInfoTable;