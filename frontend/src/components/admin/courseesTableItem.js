import React from 'react';
import {dataLoader} from "../../services/apiService";
import {bindActionCreators} from "redux";
import {open} from "../../actions/popupAction";
import {connect} from "react-redux";
import {EDIT_COURSE_POPUP} from "../../constants/popupConstants";

class CoursesTableItem extends React.Component {

  deleteCourseButtonClickHandler = () => {
    dataLoader('courses', 'DELETE', null, this.props.data.id);
  };

  editCourseButtonClickHandler = () => {
    this.props.dispatch(open(EDIT_COURSE_POPUP, this.props.data.id));
  };

  render() {
    return (
      <ul className='courses-table-item'>
        <li>{this.props.data.name}</li>
        <button style={{color: 'red'}} onClick={this.deleteCourseButtonClickHandler}>Delete</button>
        <button style={{color: 'green'}} onClick={this.editCourseButtonClickHandler}>Rename</button>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(CoursesTableItem);