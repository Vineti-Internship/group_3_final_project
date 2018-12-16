import React from 'react';
import {bindActionCreators} from "redux";
import {open} from "../../actions/popupAction";
import {connect} from "react-redux";
import {dataLoader} from "../../services/apiService";
import {EDIT_TEACHER_POPUP} from "../../constants/popupConstants";

// import {EDIT_TEACHER_POPUP} from "../../constants/popupConstants";

class TeachersTableItem extends React.Component {

  deleteTeacherButtonClickHandler = () => {
    dataLoader('teachers', 'DELETE', null, this.props.data.id);
  };

  editTeacherButtonClickHandler = () => {
    this.props.dispatch(open(EDIT_TEACHER_POPUP, this.props.data.id));
  };

  render() {
    return (
      <ul className='table-item'>
        <li>{this.props.data.first_name + ' ' + this.props.data.last_name}</li>
        <li>{this.props.data.email}</li>
        <li style={{width:'40px'}}>{this.props.data.id}</li>
        <li style={{width:'40px'}}>{this.props.data.section.name}</li>
        <button style={{color: 'red'}} onClick={this.deleteTeacherButtonClickHandler}>Delete</button>
        <button style={{color: 'green'}} onClick={this.editTeacherButtonClickHandler}>Rename</button>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({open}, dispatch);
};

export default connect(mapDispatchToProps)(TeachersTableItem);