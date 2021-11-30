import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";


import {images,COLORS,SIZES,FONTS} from "../constants"
import { CustomButton } from '../components';
const Login = ({ navigation }) => {

    function renderHeader(){
        <View
            style={{
                height:SIZES.height>700 ? "65%":"60%"
            }}
            >
                <ImageBackground
                source={require('../assets/images/loginBackground.jpeg')}
                style={{
                    flex:1,
                    justifyContent:'flex-end'
                }}
                resizeMode="cover"
                >
                    <LinearGradient
                    start={{x:0,y:0}}
                    end={{x:0,y:1}}
                    colors={[
                        COLORS.transparent,
                        COLORS.black
                    ]}
                    style={{
                        height:200,
                        justifyContent:'flex-end',
                        paddingHorizontal:SIZES.padding
                    }}
                    >
                        <Text
                            style={{
                                width:"80%",
                                color:COLORS.width,
                                ...FONTS.largeTitle,
                                lineHeight:45
                            }}
                        >
                            Yemek yapmak artık çok kolay...
                        </Text>

                    </LinearGradient>

                </ImageBackground>
        </View>
    }

    function renderDetail(){
        return(
            <View
            style={{
                flex:1,
                paddingHorizontal:SIZES.padding,
            }}
            >
                {/*Description */}
                <Text
                style={{
                    marginTop:SIZES.radius,
                    width:"70%",
                    color:COLORS.gray,
                    ...FONTS.body3
                }}
                >
                    Damak zevkinize göre lezzetleri bulun ve hemen hazırlayın ...

                </Text>
                {/*buttons */}
                <View
                    style={{
                        flex:1,
                        justifyContent:'center'
                    }}
                >
                    {/*login */}
                    <CustomButton
                        buttonText="Giriş Yap"
                        buttonContainerStyle={{
                            paddingVertical:18,
                            borderRadius:20
                        }}
                        colors={[COLORS.darkGreen,COLORS.lime]}
                        onPress={()=> navigation.replace("HOME")}
                    
                    />
                    {/*sign up */}
                    <CustomButton
                        buttonText="oturum aç"
                        buttonContainerStyle={{
                            marginTop:SIZES.radius,
                            paddingVertical:18,
                            borderRadius:20,
                            borderColor:COLORS.darkLime,
                            borderWidth:1
                        }}
                        colors={[COLORS.darkGreen,COLORS.lime]}
                        onPress={()=> navigation.replace("HOME")}
                    
                    />


                </View>

            </View>
        )
    }





    return (
        <View
           style={{
               flex:1,
               backgroundColor:COLORS.black
           }} 
        >
            <StatusBar barStles="Light-content"/>
            {/*Header*/}
            {renderHeader()}
            {/*Detail*/}
            {renderDetail}
        </View>
    )
}

export default Login;