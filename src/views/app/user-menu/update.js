import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from 'redux/actions';
import ReuseForm from './reuse-form';

const Update = (props) => {
  const { updateUserAction, match, location } = props;

  return (
    <ReuseForm
      func={updateUserAction}
      match={match}
      button="Update"
      type="update"
      id={location.state.id}
    />
  );
};

const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  updateUserAction: updateUser,
})(Update);
