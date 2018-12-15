import React from 'react';
import {bindActionCreators} from "redux";
import {open} from "../../actions/popupAction";
import {connect} from "react-redux";
import {dataLoader} from "../../services/apiService";
import {EDIT_SECTION_POPUP} from "../../constants/popupConstants";

class SectionsTableItem extends React.Component {

  deleteSectionButtonClickHandler = () => {
    dataLoader('sections', 'DELETE', null, this.props.data.id);
  };

  editSectionButtonClickHandler = () => {
    const data = {
      courseId: this.props.data.course.id,
      sectionId: this.props.data.id
    };
    this.props.dispatch(open(EDIT_SECTION_POPUP, data));
  };

  render() {
    const {course, teacher} = this.props.data;
    return (
      <ul className='table-item'>
        <li>{this.props.data.name}</li>
        <li>{course.name}</li>
        <li>{teacher.first_name + ' ' + teacher.last_name}</li>
        <li style={{width:'40px'}}>{this.props.data.id}</li>
        <button style={{color: 'red'}} onClick={this.deleteSectionButtonClickHandler}>Delete</button>
        <button style={{color: 'green'}} onClick={this.editSectionButtonClickHandler}>Rename</button>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(SectionsTableItem);