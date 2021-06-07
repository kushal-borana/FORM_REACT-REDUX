import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterWrapper from './Register.wrapper';
import performRegister from './Register.actions';

class RegisterContainer extends PureComponent {
  
  render() {
      const {actions , data } = this.props;
    return <RegisterWrapper data={data} actions={actions} />;
  }
}

const mapStateToProps = state => ({
  loading: state.register.loading,
  data: state.register.data,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    register: registerDetails => {
      return dispatch(performRegister(registerDetails));
    },
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterContainer),
);