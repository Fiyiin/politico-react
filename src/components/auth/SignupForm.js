import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const SignupForm = ({ hide, userSignup }) => (
  <div className="backdrop">
    <div className="modal-body">
      <div className="imgContainer">
        <img src="./assets/images/1.png" alt="Avatar" className="signup-avatar" />
        <span className="modal-close" id="signup-close" title="signup-close" onClick={hide}>&times;</span>
        <h2>Sign Up</h2>
      </div>
      <Formik
        initialValues={{
          email: '', firstname: '', lastname: '', phoneNumber: '', password: '', confirm_pass: '',
        }}
        onSubmit={(user, { setSubmitting }) => {
          userSignup(user);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="animate">
            <div className="formFields">

              <Field type="text" name="firstname" placeholder="Firstname" id="fname" />
              <Field type="text" name="lastname" placeholder="Lastname" id="lname" />
              <Field type="text" name="email" placeholder="Email Address" id="email" />

              <Field type="text" name="phoneNumber" placeholder="Phone Number" id="phone" />

              <Field type="Password" name="password" placeholder="Password" id="pwd" />

              <button id="signup" type="submit" disabled={isSubmitting}>Sign Up</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

SignupForm.propTypes = {
  hide: PropTypes.func.isRequired,
  userSignup: PropTypes.func.isRequired,
};

export default SignupForm;
