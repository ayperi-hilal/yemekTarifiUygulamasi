import React from "react";
import {
    TouchableOpacity,
    Text,
    Touchable
} from 'react-native'
import LinearGradient from "react-native-linear-gradient";

import {COLORS,FONTS} from "../constants";

const CustomButton=({buttonText,buttonContainerStyle,colors,onPress})=>{

    if(colors.length>0){
        return(
            <Touchable
                onPress={onPress}
            >
                <linearGradient>
                    start={{x:0 ,y=0}}
                    end={{x:1,y:0}}
                    colors={colors}
                    style={{
                        ...buttonContainerStyle
                    }}
                <Text
                style={{
                    textAlign:'center',
                    color:COLORS.white,
                    ...FONTS.h3
                }}
                >
                    {buttonText}
                </Text>
                </linearGradient>
            </Touchable>
        )
    }
    else{
        return(
            <Touchable
            style={{
                ...buttonContainerStyle
            }}
                onPress={onPress}
            >
                <Text
                style={{
                    textAlign:'center',
                    color:COLORS.white,
                    ...FONTS.h3
                }}
                >
                    {buttonText}
                </Text>

            </Touchable>

        )
    }
}

export default CustomButton;
