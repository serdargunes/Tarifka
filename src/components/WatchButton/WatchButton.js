import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import styles from './WatchButton.style';


const WatchButton = ({onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.text}>Watch On Youtube</Text>
        </TouchableOpacity>
    )

}
export default WatchButton;