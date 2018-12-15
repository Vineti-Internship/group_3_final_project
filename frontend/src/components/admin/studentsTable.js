import React from 'react';
import {dataLoader, EVENT_DATA_SHOULD_UPDATE} from "../../services/apiService";
import StudentsTableItem from "./studentsTableItem";

class StudentsTable extends React.Component {

  state = {
    data: {}
  };

  constructor(props) {
    super(props);
    document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

  loadData = async () => {
    const data = await dataLoader('students', 'GET');

    this.initTableItems(data);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><StudentsTableItem data={element}/></li>
    );

    this.setState({
      listItems: listItems
    });
  };

  render() {
    return (
      <div className={'table-component'}>
        <ul>{this.state.listItems}</ul>
      </div>
    );
  }

  componentDidMount() {
    this.loadData();
  }
}

export default StudentsTable;