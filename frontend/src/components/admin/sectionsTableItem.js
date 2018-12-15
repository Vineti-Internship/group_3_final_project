import React from 'react';
import {bindActionCreators} from "redux";
import {open} from "../../actions/popupAction";
import {connect} from "react-redux";

class SectionsTableItem extends React.Component {

  render() {
    const {course, teacher} = this.props.data;
    return (
      <ul className='table-item'>
        <li>{this.props.data.name}</li>
        <li>{course.name}</li>
        <li>{teacher.first_name + ' ' + teacher.last_name}</li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(SectionsTableItem);