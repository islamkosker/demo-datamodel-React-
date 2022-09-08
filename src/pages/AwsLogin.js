
import React,{useState} from "react";

import {
  Authenticator,
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import './AwsLogin.css';
import App from "../App";
import arteqlogo from "./arteqlogo.png"





 function AwsLogin({ signOut }) {

  
  return (
  
 <Authenticator>

  <App/>

 </Authenticator>
 
     
  );
}
export default withAuthenticator(AwsLogin);

