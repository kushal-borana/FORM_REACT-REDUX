import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import "./login.css";


export default function LoginWrapper(props)  {
    const {actions,data}=props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();  

    const submitHandler = async (e) => {
    e.preventDefault();
    actions.login({email, password});
    history.push('/loggedin');
    }
    return (
    <div className="main">
      <div className="box">
           
          <form onSubmit={submitHandler}  className="box" noValidate autoComplete="off">
          <center><h1>LOGIN</h1></center>
          
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
            LOGIN
        </Button>
        <Link 
            style={{textDecoration:"none"}} 
            href="/register" color="black">
            Dont have account, REGISTER
        </Link>
      </form>
      </div>
    </div>
    );
}