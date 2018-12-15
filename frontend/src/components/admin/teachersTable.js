import React from 'react';
import {dataLoader, EVENT_DATA_SHOULD_UPDATE} from "../../services/apiService";
import TeachersTableItem from "./teachersTableItem";

class TeachersTable extends React.Component {

  state = {
    data: {}
  };

  constructor(props) {
    super(props);
    document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

  loadData = async () => {
    const data = await dataLoader('teachers', 'GET');

    this.initTableItems(data);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><TeachersTableItem data={element}/></li>
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

export default TeachersTable;