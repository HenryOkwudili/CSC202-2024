/**Let's use timer to illustrate useEffect that hooks to componentWillUnmount */
import React, { useEffect, useState } from "react";
import {View, Text} from 'react-native';

const Component6: React.FC=()=>{
    const [date, setDate]= useState(new Date());

    const tick = () =>{
        setDate(new Date());
    }

    useEffect(()=>{
        const timerID = setInterval(tick, 1000); //pass tick as callback function. Called every 1000ms to set a new Date() in state.
        /*now we need to let this useEffect know that there is work to do when component is to unmount. We indicate
        this work to do in a return statement that takes a function callback.*/
        return(
            ()=>{
                clearInterval(timerID);
            }
        )
    }, []);

    return(
        <View>
            <Text>Greetings from Component7</Text>
            <Text>
            {`Today's date is ${date.toLocaleDateString('en-GB')}
            and the time now is ${date.toLocaleTimeString('en-GB')}`}
            </Text>
        </View>
    )
}

export default Component6;