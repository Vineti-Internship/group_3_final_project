import React from 'react';

class ExamsOfSectionTableItem extends React.Component {

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.topic}</li>
        <li>{this.props.data.date}</li>
      </ul>
    );
  }
}

export default ExamsOfSectionTableItem;