import { React, useEffect } from 'react';
import { Button, Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { getUser, deleteUser, clearMessage } from 'redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'components/common/react-notifications';
import Breadcrumb from 'containers/navs/Breadcrumb';

const List = ({
  match,
  getUserAction,
  deleteUserAction,
  clearMessageAction,
  userList,
  successMessage,
  errorMessage,
  messageTitle,
}) => {
  const history = useHistory();

  useEffect(() => {
    getUserAction();

    if (successMessage !== '') {
      NotificationManager.success(
        successMessage,
        messageTitle,
        3000,
        null,
        null,
        ''
      );
      clearMessageAction();
    } else if (errorMessage !== '') {
      NotificationManager.error(
        errorMessage,
        messageTitle,
        3000,
        null,
        null,
        ''
      );
      clearMessageAction();
    }
  }, [successMessage, errorMessage, messageTitle]);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <div className="space-between">
            <div>
              <Breadcrumb heading="menu.user-menu" match={match} />
            </div>
            <div>
              <Button
                className="custom-btn"
                onClick={() => {
                  history.push('/app/user-menu/add');
                }}
              >
                <i
                  className="iconsminds-add-user
"
                >
                  Add
                </i>
              </Button>
              <Button
                className="custom-btn"
                onClick={() => {
                  history.goBack();
                }}
              >
                <i
                  className="iconsminds-arrow-back-3
"
                >
                  Back
                </i>
              </Button>
            </div>
          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>
                      <Button
                        className="custom-btn"
                        onClick={() => {
                          history.push({
                            pathname: `/app/user-menu/update`,
                            state: {
                              id: item.id,
                            },
                          });
                        }}
                      >
                        <i className="simple-icon-pencil" />
                      </Button>
                      <Button
                        className="custom-btn"
                        onClick={() => {
                          deleteUserAction(item.id);
                        }}
                      >
                        <i className="simple-icon-trash" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Colxx>
      </Row>
    </>
  );
};

const mapStateToProps = ({ userReducer }) => {
  const { userList, successMessage, errorMessage, messageTitle } = userReducer;
  return { userList, successMessage, errorMessage, messageTitle };
};

export default connect(mapStateToProps, {
  getUserAction: getUser,
  deleteUserAction: deleteUser,
  clearMessageAction: clearMessage,
})(List);
