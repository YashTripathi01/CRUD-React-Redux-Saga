import React from 'react';
import { connect } from 'react-redux';
import { addUser } from 'redux/actions';
import ReuseForm from './reuse-form';

const Add = (props) => {
  const { addUserAction, match } = props;

  return (
    <ReuseForm func={addUserAction} match={match} button="Add" type="add" />
  );
};

const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  addUserAction: addUser,
})(Add);
