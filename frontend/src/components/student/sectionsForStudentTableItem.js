import React from 'react';

class SectionsForStudentTableItem extends React.Component {

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.name}</li>
        <li>{this.props.data.id}</li>
      </ul>
    );
  }
}

export default SectionsForStudentTableItem;