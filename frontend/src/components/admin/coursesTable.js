import React from 'react';
import CoursesTableItem from "./courseesTableItem";
import {dataLoader} from "../../services/apiService";

class CoursesTable extends React.Component {

  state = {
    data: {}
  };

  constructor(props) {
    super(props);
    // document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

  loadData = async () => {
    const data = await dataLoader('courses', 'GET');

    this.initTableItems(data);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><CoursesTableItem data={element}/></li>
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

export default CoursesTable;