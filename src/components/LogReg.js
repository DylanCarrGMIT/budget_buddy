import React, { useEffect, useState } from "react";
import axios from "axios";

function LogReg(){

    //varible and methods to assign names for registering/logging in(and cookie confirmation)
    const [regUsername, setUsername] = useState('');
    const [regPassword, setPassword] = useState('');

    const [username, setUsernameLog] = useState('');
    const [password, setPasswordLog] = useState('');

    const [loginState, setLoginState] = useState("");

    axios.defaults.withCredentials = true;

    //send information to the backend
    const reg = () => {
        axios.post("http://localhost:3001/register", {
            username: regUsername,
            password: regPassword,
        }).then((res) => {
            console.log(res);
        });
    };
    //take information from database and check in input fields not empty
    const log = () => {
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((res) => {
            if(res.data.message){
                setLoginState(res.data.message)   
            }
            else{
                setLoginState(res.data[0].username);
            }
        });
    };

    //used to check if cookies are avalible and will keep a previous user logged in 
    useEffect(()=>{
        axios.get("http://localhost:3001/login").then((response)=>{
            if (response.data.loggedIn == true){
                setLoginState(response.data.user[0].username);
            }
        });
    }, []);

    //html form to get login information from user
    return(
    <div className="main">
        <div className="registration">
            <h1>Register</h1>
            <label>Username: </label>
            <input type="text" 
                onChange={(e)=>{
                    setUsername(e.target.value);
                    }}/><br />
            <label>Password: </label>
            <input type="text" 
                onChange={(e)=>{
                    setPassword(e.target.value);
                    }}/><br />
            <button className="button" onClick={reg}>Register</button>
        </div>
        <div className="login">
        <h1>Login</h1>
            <input type="text" placeholder="Enter Username.." onChange={(e)=>{
                    setUsernameLog(e.target.value);
                    }} /><br />
            <input type="password" placeholder="Enter Password.." onChange={(e)=>{
                    setPasswordLog(e.target.value);
                    }} /><br />
            <button className="button" onClick={log}>Login</button>
        </div>

        <h1>{loginState}</h1>
    </div>
    );
}
//default export for every
export default LogReg; 