import React from "react";
import { GoogleOutlined } from '@ant-design/icons';

import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
    return (
    <div id="login-page">
        <div id="login-card">
            <h2>RESPONS</h2>
            <div 
                className="login-button google"
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <GoogleOutlined />+ Sign in with Google
            </div>
        </div>
        <div id="login-disclaimer">
        <h4>This is a sample to create and test out IBM's Watson chatbot and ChatEngine.io's direct messaging feature for a group project.</h4>
        </div>
    </div>
    );
}

export default Login;