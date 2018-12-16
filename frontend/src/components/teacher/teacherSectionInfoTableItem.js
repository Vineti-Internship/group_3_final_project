import React from 'react';

class TeacherSectionInfoTableItem extends React.Component {

  state = {
    data: {}
  };

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.first_name + ' ' + this.props.data.last_name}</li>
        <li>{this.props.data.email}</li>
        <li style={{width:'40px'}}>{'id:' + this.props.data.id}</li>
      </ul>
    );
  }
}

export default TeacherSectionInfoTableItem;