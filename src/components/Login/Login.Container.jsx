import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoginWrapper from './Login.wrapper';
import performLogin from './Login.actions';

class LoginContainer extends PureComponent {
  
  render() {
      const {actions , data } = this.props;
    return <LoginWrapper data={data} actions={actions} />;
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  data: state.login.data,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    login: loginDetails => {
      return dispatch(performLogin(loginDetails));
    },
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer),
);