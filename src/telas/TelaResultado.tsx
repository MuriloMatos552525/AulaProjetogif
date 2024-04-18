import { ImageBackground, Text, View} from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from 'react-native-vector-icons'
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import axios from "axios";



const TelaResultado = ({route, navigation}) =>{
    const escolha = route.params.escolha;
    const link = `api.giphy.com/v1/${escolha}/search`
    const [text, setText]=useState ("")

    const solicitar = async (text)=>{
        try {
            const resultados = await axios.get(link, {
                params:{api_key:"",
                q: text,
                lang:'pt',



                }
            })
                console.log(resultados)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(link)

    return(

        <ImageBackground  source={require('../../assets/BG.png')}
        style={estilo.container}

    >
        <SafeAreaView>
        <View style={estilo.cabecalho}>
        <Ionicons name="chevron-back" size={40} color='white' onPress={()=>navigation.goBack()}/>
        <TextInput 
        placeholder="Pesquisar"
        style={estilo.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value)=>setText(value)}

        
        />

        <Ionicons 
        name='search' 
        size={40} 
        color='white' 
        onPress={solicitar(text)}
        />
        </View>
        </SafeAreaView>
        
        </ImageBackground>
    )
}

const estilo =StyleSheet.create({
    container:{
        flex:1,
    },
    cabecalho: {
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:15
    },
    input:{
        backgroundColor:'white',
        flex:1, 
        borderRadius:20,
    }

        
    
});

export default TelaResultado