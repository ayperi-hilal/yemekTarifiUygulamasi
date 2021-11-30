import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import { FONTS,COLORS } from '../constants';

const Viewers =({viewerList})=>{

    if(viewerList?.length==0){
        return(
            <View
                style={{
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Text
                    style={{
                        color:COLORS.lightGray2,
                        ...FONTS.body4
                    }}
                >
                    Tarifi ilk deneyen sen olacaksın...
                </Text>

            </View>

            
        )
    }else if (viewerList?.length<=4){
        return(
           <View>
            {/*profil kısmı */}
            <View
                 
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'flex-end',
                    marginBottom:10
                }}
            
            >
                {
                    viewerList?.map((item,index)=>{
                        <View
                            key={index}
                            style={{
                                height:50,
                                width:50,
                                marginLeft:index==0?0:-20
                            }}
                        >
                            <Image
                                source={{item,profilePic}}/*nokta olduüunda hata verdi kod */
                                style={{
                                    width:50,
                                    height:50,
                                    borderRadius:25
                                }}
                            />

                        </View>

                    })
                }

            </View>
            {/*text yazı kısmı */}
            <Text
                style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18
                }}
            >
                {viewerList?.length} kişi

            </Text>
            <Text
                style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18
                }}
            >
                Bu tarifi deneyiniz...
            </Text>
        </View>


        )
    } else{
        return(
            <View>
            {/*profil kısmı */}
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'flex-end',
                    marginBottom:10
                }}
            >
                {
                    viewerList?.map((item,index)=>{
                        if(index<=2){
                            return(
                                <View
                                    key={index}
                                    style={{
                                        height:50,
                                        width:50,
                                        marginLeft:index==0?0:-20
                                    }}
                                >
                                <Image
                                    source={item.profilePic}
                                    style={{
                                        width:50,
                                        height:50,
                                        borderRadius:25
                                    }}
                                />
                                </View>
                            )
                        }

                        if(index==3){
                            return(
                                <View
                                  key={index}
                                  style={{
                                      height:50,
                                      width:50,
                                      alignItems:'center',
                                      justifyContent:'center',
                                      marginLeft:-20,
                                      borderRadius:25,
                                      backgroundColor:COLORS.darkGreen
                                  }}
                                >
                                <Text
                                  style={{
                                      color:COLORS.white,
                                      ...FONTS.body4
                                  }}
                                >
                                {viewerList?.length-3}+
                                </Text>
                                </View>

                            )
                        }
                    })
                }
            
            </View>
            {/*text */}
            
            <Text
                style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18
                }}
            >
                {viewerList?.length} kişi

            </Text>
            <Text
                style={{
                    color:COLORS.lightGray2,
                    textAlign:'right',
                    ...FONTS.body4,
                    lineHeight:18
                }}
            >
                Bu tarifi deneyiniz...
            </Text>


            </View>


        

        )
    }

}
export default Viewers;