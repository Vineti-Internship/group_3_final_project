import React from 'react';
import {getGradesForSection} from "../../helpers/backEndHalper";

class TeacherSectionInfoTableItem extends React.Component {

  state = {};

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.grade.id}>{element.grade.value}</li>
    );

    this.setState({
      grades: listItems
    });
  };

  loadData = async () => {
    const data = await getGradesForSection();
    if(data)
      this.initTableItems(data);
  };

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.first_name + ' ' + this.props.data.last_name}</li>
        <li>{this.props.data.email}</li>
        <li style={{width:'40px'}}>{'id:' + this.props.data.id}</li>
        {this.state.grades}
      </ul>
    );
  }

  componentDidMount() {
    this.loadData();
  }
}

export default TeacherSectionInfoTableItem;