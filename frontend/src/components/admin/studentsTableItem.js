import React from 'react';
import {bindActionCreators} from "redux";
import {open} from "../../actions/popupAction";
import {connect} from "react-redux";
import {dataLoader} from "../../services/apiService";
import {BIND_SECTION_POPUP, EDIT_STUDENT_POPUP} from "../../constants/popupConstants";

class StudentsTableItem extends React.Component {

  deleteStudentButtonClickHandler = () => {
    dataLoader('students', 'DELETE', null, this.props.data.id);
  };

  editStudentButtonClickHandler = () => {
    this.props.dispatch(open(EDIT_STUDENT_POPUP, this.props.data.id));
  };

  bindToSectionHandler = () => {
    this.props.dispatch(open(BIND_SECTION_POPUP, this.props.data.id));
  };

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.first_name}</li>
        <li>{this.props.data.last_name}</li>
        <li>{this.props.data.email}</li>
        <li style={{width:'40px'}}>{this.props.data.id}</li>
        <button style={{color: 'red'}} onClick={this.deleteStudentButtonClickHandler}>Delete</button>
        <button style={{color: 'green'}} onClick={this.editStudentButtonClickHandler}>Rename</button>
        <button style={{color: 'green'}} onClick={this.bindToSectionHandler}>Bind to section</button>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(StudentsTableItem);