import React from "react";
import LottieView from 'lottie-react-native'

const Loading = () => {
    return(
        <LottieView
            source={require('../../assets/loading-meal.json')}
            style={{width:"100%",heigth:"100%"}}
            autoPlay
            loop
        />
    )

}
export default Loading;