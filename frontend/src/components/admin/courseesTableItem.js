import React from 'react';

const CoursesTableItem = (props) => {
  return (
    <ul className='courses-table-item'>
      <li>{props.data.name}</li>
      {/*<button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={this.addBookButtonClickHandler}>add Book</button>*/}
      {/*<button style={{color: context.warningColor, backgroundColor: context.buttonColor}} onClick={this.deleteAuthorButtonClickHandler}>Delete</button>*/}
      {/*<button style={{color: context.editColor, backgroundColor: context.buttonColor}} onClick={this.editAuthorButtonClickHandler}>Edit</button>*/}
    </ul>
  );
};

export default CoursesTableItem;