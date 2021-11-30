import React from 'react';
import{
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList

} from 'react-native';

import { FONTS,COLORS,SIZES,icons,images,dummyData } from "../components";
import { CategoryCard,TrendingCard } from "../components";

const Home =({navigation})=>{
    function renderHeader(){
        return(
            <View
                style={{
                    flexDirection:'row',
                    marginHorizontal:SIZES.padding,
                    alignItems:'center',
                    height:80,
            
            }}
            >
                {/*yazı kısmı */}
                <View
                    style={{
                        flex:1,
                    }}
                >
                    <Text
                    style={{
                        color:COLORS.darkGreen,
                        ...FONTS.h2
                    }}
                    >
                        programıma hosgeldin
                    </Text>

                    <Text
                        style={{
                            marginTop:3,
                            color:COLORS.gray,
                            ...FONTS.body3
                        }}

                    >
                        bugün ne yemek yapmak istersin
                    </Text>
                </View>
                {/*resim kısmı */}
                <TouchableOpacity
                    onPress={()=>console.log("Profil")}
                
                >
                    <Image
                        source={images.profile}
                        style={{
                            width:40,
                            height:40,
                            borderRadius:20
                        }}

                    />

                </TouchableOpacity>


            </View>
        )
    }

    function renderSearch(){
        return(
            <View
            style={{
                flexDirection:'row',
                height:50,
                alignItems:'center',
                marginHorizontal:SIZES.padding,
                paddinHorizontal:SIZES.radius,
                borderRadius:10,
                backgroundColor:COLORS.lightGray
            
            }}
            >
                <Image

                    source={icons.search}
                    style={{
                        width:20,
                        height:20,
                        tintColor:COLORS.gray
                    }}
                />
                <TextInput
                    style={{
                        marginLeft:SIZES.radius,
                        ...FONTS.body3
                    }}
                    blaceholderTextColor={COLORS.gray}
                    placeholder="Search Recipes"
                              
                />

            </View>
        )
    }

    function renderSeeRecipeCard(){
        return(
            <View
            style={{
                flexDirection:'row',
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding,
                borderRadius:10,
                backgroundColor:COLORS.lightGreen
            }}
            >
                {/*resim */}
                <View
                style={{
                    width:100,
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                    <Image
                    source={images.repice}
                    style={{
                        width:80,
                        height:80
                    }}
                    />

                </View>
                {/*text kısmı */}
                <View
                    style={{
                        flex:1,
                        paddingVertical:SIZES.radius
                    }}
                
                >
                    <Text
                        style={{
                            width:"70%",
                            ...FONTS.body4
                        }}
                    >
                        henüz denemediğin 12 tarifin var

                    </Text>
                    <TouchableOpacity
                        style={{
                            marginTop:10,
                        }}
                        onPress={()=>console.log("see recipes")}
                    
                    >
                        <Text
                            style={{
                                color:COLORS.darkGreen,
                                textDecorationLine:'underline',
                                ...FONTS.h4
                            }}
                        >
                                tariflere bak
                        </Text>
                    </TouchableOpacity>


                </View>

            </View>
        )
    }

    function renderTrendingSection(){
        return(

            <View
            style={{
                marginTop:SIZES.padding,
            }}

            >
                <Text
                
                style={{
                    marginHorizontal:SIZES.padding,
                    ...FONTS.h2
                }}
                
                >
                    Denediğiniz Yemekler
                    
                </Text>
                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item=>'${item.id}'}
                    renderItem={({item,index})=>{
                        return(
                            <TrendingCard
                            containerStyle={{
                                marginLeft:index==0 ? SIZES.padding:0
                            }}
                                recipeItem={item}
                                onPress={()=> navigation.navigate("Recipe",{recipe:item})}
                            />
                        )
                    }}
                />


            </View>
        )

    }
    function renderCategoryHeader(){
        return(
            <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:20,
                marginHorizontal:SIZES.padding
            }}
            >
                {/*SECTİON tİTLE */}
                <Text
                    style={{
                        flex:1,
                        ...FONTS.h2
                    }}
                >
                    Categories
                </Text>
                {/* view all */}
                <TouchableOpacity>
                    <Text
                        style={{
                            color:COLORS.gray,
                            ...FONTS.body4
                        }}
                    >
                        VIEW ALL
                    </Text>
                </TouchableOpacity>

            </View>
        )

    }




    return(
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item=>'${item.id}'}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/*header */}
                        {renderHeader()}
                        {/*arama çubuğu */}
                        {renderSearch()}
                        {/*see recipe card */}
                        {renderSeeRecipeCard()}
                        {/*trending section */}
                        {renderTrendingSection()}
                        {/*category header */}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({item})=>{
                    return(
                        <CategoryCard
                            containerStle={{
                                marginHorizontal:SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={()=>navigation.navigate
                            ("Recipe",{recipe:item})}
                        />
                    )
                }}
                ListEmptyComponent={
                    <View 
                    style={{
                        marginBottom:100
                    }}
                    >

                    </View>
                }
            />
        


        </SafeAreaView>

       
    )

}

export default Home;