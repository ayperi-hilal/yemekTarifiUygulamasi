import React from "react";
import { View,
TouchableOpacity,
Text,
Image } 
from 'react-native';

import { COLORS,FONTS,SIZES } from "../constants";

const CategoryCard=({containerStle,categoryItem,onPress})=>{
    return(
        <TouchableOpacity

            style={{
                flexDirection:'row',
                alignItems:'center',
                padding:10,
                marginTop:10,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.gray2,
                ...containerStle
            }}
            onPress={onPress}

        >
            {/*resim kısmı */}
            
            <Image
                source={categoryItem.Image}
                resizeMode="cover"
                style={{
                    width:100,
                    height:100,
                    borderRadius:SIZES.radius
                }}
            />
            <View
                style={{
                    width:'65%',
                    paddingHorizontal20
                }}
            >
                {/*isim kısmı */}
                <Text
                    style={{
                        flex:1,
                        ...FONTS.h2
                    }}
                >
                    {categoryItem.name}
                </Text>

                {/*servis özellikleri */}
                <Text
                    style={{
                        color:COLORS.gray,
                        ...FONTS.body4
                    }}
                >
                    {categoryItem.duration}|{categoryItem.serving} Serving
                </Text>

            </View>

        </TouchableOpacity>
    )
}
export default CategoryCard;