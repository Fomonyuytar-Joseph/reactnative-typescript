import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { SignUp ,Login } from "../screens";

const {Navigator ,Screen}=createStackNavigator();

 const AuthStack : React.FC =()=>{

   return(
    <Navigator>
        <Screen name="signup" component={SignUp}/>
        <Screen name="login" component={Login}/>
    </Navigator>
   )


}

export default AuthStack