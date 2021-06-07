import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoggedinWrapper from './Loggedin.wrapper';
import performLogout from './Loggedin.actions';

class LoggedinContainer extends PureComponent {
  
  render() {
    const {data, actions} = this.props;
    return <LoggedinWrapper data={data} actions={actions}/>;
  }
}

const mapStateToProps = state => ({
  data: state.login.data,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    logout: () => {
      return dispatch(performLogout());
    },
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoggedinContainer),
);