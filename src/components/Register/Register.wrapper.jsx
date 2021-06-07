import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './register.css';

export default function RegisterWrapper(props)  {
    const {actions,data}=props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  

    const handleSubmit = async (e) => {
    e.preventDefault();
    actions.register({email,password});
    }
  return (
      <div className="main">
          <div classname="box">
          <form className="form" onSubmit = {(e) => handleSubmit(e)} className="box" noValidate autoComplete="off">
          <center><h1>REGISTER</h1></center>
            <TextField className="btn" 
                onChange = {(e) => setEmail(e.target.value)}  
                id="un" 
                label="email" 
                variant="filled" /><br/>
            <br/>
            <TextField className="btn"
                onChange = {(e) => setPassword(e.target.value)}  
                id="ps" 
                label="Password" 
                type="password" 
                variant="filled" /><br/>
            <br/>
            <Button className="btn"  
                variant="outlined" 
                type="submit" color="secondry" 
                >
                REGISTER
            </Button>
            <Link 
                style={{textDecoration:"none"}} 
                href="/login">
                have account, Login here
        </Link>
          </form>
          </div>
      </div>
  );
}
