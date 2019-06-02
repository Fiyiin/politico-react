import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const LoginForm = ({ hide, userLogin }) => (
  <div className="backdrop">
    <div className="modal-body">
      <div className="imgContainer">
        <span className="modal-close" id="close" title="close" onClick={hide}>&times;</span>
        <img src="./assets/images/1.png" alt="Avatar" className="avatar" />
        <h2>Welcome Back!</h2>
      </div>
      <Formik
        initialValues={{
          email: '', password: '',
        }}
        onSubmit={(user, { setSubmitting }) => {
          userLogin(user);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="animate">
            <div className="formFields">

              <Field type="text" placeholder="Enter Username" name="email" />
              <Field type="password" placeholder="Enter Password" name="password" />

              <button id="signup" type="submit" disabled={isSubmitting}>Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

LoginForm.propTypes = {
  hide: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
};

export default LoginForm;
