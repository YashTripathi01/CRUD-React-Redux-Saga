import React, { useEffect } from 'react';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { Form, Formik } from 'formik';
import { getUserById, clearMessage } from 'redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'components/common/react-notifications';
import * as yup from 'yup';

const ReuseForm = ({
  getUserByIdAction,
  clearMessageAction,
  user,
  func,
  match,
  button,
  type,
  id,
  loading,
  successMessage,
  errorMessage,
  messageTitle,
}) => {
  let dataToSend;
  const history = useHistory();
  const initialValue = {
    email: '',
    username: '',
    name: '',
    phone: '',
    website: '',
  };
  /* eslint-disable */
  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
  /* eslint-enable */

  useEffect(() => {
    if (type === 'update') {
      getUserByIdAction(id);
    }

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

  const submitHandler = (data, { resetForm }) => {
    if (type === 'add') {
      dataToSend = data;
    } else {
      dataToSend = { id, data };
    }

    func(dataToSend);
    resetForm();
    history.push(`/app/user-menu/list`);
  };

  const validationSchemas = yup.object({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    username: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    phone: yup.number().required('Required'),
    website: yup.string().matches(URL, 'Invalid url').required('Required'),
  });

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
      <Formik
        enableReinitialize
        validationSchema={validationSchemas}
        onSubmit={submitHandler}
        initialValues={type === 'add' ? initialValue : user}
      >
        {({ errors, touched, values, handleBlur, handleChange }) => (
          <Form>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="abc@abc.com"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <div className="error-msg">{errors.email}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleUsername">Username</Label>
                  <Input
                    id="exampleUsername"
                    name="username"
                    placeholder="username"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username ? (
                    <div className="error-msg">{errors.username}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleName">Name</Label>
                  <Input
                    id="exampleName"
                    name="name"
                    placeholder="John Wick"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name ? (
                    <div className="error-msg">{errors.name}</div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="examplePhone">Phone</Label>
                  <Input
                    id="examplePhone"
                    name="phone"
                    placeholder="7894561230"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="error-msg">{errors.phone}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleWebsite">Website</Label>
                  <Input
                    id="exampleWebsite"
                    name="website"
                    placeholder="www.example.com"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                  />
                  {errors.website && touched.website ? (
                    <div className="error-msg">{errors.website}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md={4} className="center">
                <Button
                  type="submit"
                  className={`btn-multiple-state ${
                    loading ? 'show-spinner' : ''
                  }`}
                >
                  <span className="label">{button}</span>
                  <span className="spinner d-inline-block">
                    <span className="bounce1" />
                    <span className="bounce2" />
                    <span className="bounce3" />
                  </span>
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = ({ userReducer }) => {
  const { user, loading, successMessage, errorMessage, messageTitle } =
    userReducer;
  return { user, loading, successMessage, errorMessage, messageTitle };
};

export default connect(mapStateToProps, {
  getUserByIdAction: getUserById,
  clearMessageAction: clearMessage,
})(ReuseForm);
