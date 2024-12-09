import React from 'react';
import {View,Text} from 'react-native';
import LottieView from 'lottie-react-native';

const Error = () => {
    return(
        <LottieView
            source ={require('../../assets/error.json')}
            style = {{width:"100%", height:"100%"}}
            autoPlay
            loop
        />
       
    )
}

export default Error;