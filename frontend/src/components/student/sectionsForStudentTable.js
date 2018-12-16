import React from 'react';
import {EVENT_DATA_SHOULD_UPDATE} from "../../services/apiService";
import SectionsForStudentTableItem from "./sectionsForStudentTableItem";

class SectionsForStudentTable extends React.Component {

  state = {};

  constructor(props) {
    super(props);
    document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

  loadData = () => {
    const data = JSON.parse(window.localStorage.getItem('user')).sections;
    this.initTableItems(data);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><SectionsForStudentTableItem data={element}/></li>
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

export default SectionsForStudentTable;