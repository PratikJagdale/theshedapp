import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from './firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        auth 
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });

        })
        .catch(error => {
            alert(error.message);
        });
    };
    return (
        <div className="login">
        <div className="login_container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpenEdTWFudqkONyaaW4srMu9bqTwM96SEKQ&usqp=CAU" 
            alt=""/>
            <h1>Sign in to Shed</h1>
            <p>shedofficialapp.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
        </div>            
        </div>
    )
}

export default Login;
