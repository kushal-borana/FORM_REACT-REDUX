import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import {useHistory, withRouter} from "react-router-dom";
import './loggedin.css';


class LoggedinWrapper extends PureComponent {

  constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
      }
      
    handleLogout() {
        const {actions,history} = this.props;
        actions.logout();
        history.push('/login');
    }

  render() {
    const {data}=this.props;
    return (
      <div className="main">
          <div className="box">
          <centre><h1>WELCOME</h1></centre>
          <centre><h4>{data.email}</h4></centre>
          
          <Button className="btn"  variant="outlined" type="submit" color="secondry" onClick={this.handleLogout} variant="outlined" color="secondry" href="/login">
        LOGOUT
        </Button>
      </div>
      </div>
    );
  }
}

export default withRouter(LoggedinWrapper);