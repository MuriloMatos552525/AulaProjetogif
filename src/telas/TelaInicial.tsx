import { Text,ImageBackground,StyleSheet,View, TouchableOpacity } from "react-native";
import React from "react";

const TelaInicial = (props) =>{
    

    return(
        <ImageBackground
            source={require('../../assets/HomePage.png')}
            style={estilo.container}
        >
            <Text style={estilo.mainText}>Pesquisa por</Text>

            <View style={{flexDirection:'row'}}>
               <TouchableOpacity 
                style={estilo.btn}
                onPress={()=>props.navigation.navigate('TelaResultado',{escolha:'gifs'})}
                >
                <Text style={estilo.txtBtn}>Gifs</Text>
               </TouchableOpacity>

               <TouchableOpacity
                style={estilo.btn}
                onPress={()=>props.navigation.navigate('TelaResultado',{escolha:'stickers'})}
               >
                <Text  style={estilo.txtBtn}>Stikers</Text>
               </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    mainText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    },
    btn:{
        width:100,
        height:50,
        borderWidth:3,
        borderColor:'white',
        borderRadius:10,
        backgroundColor:'white',
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    txtBtn:{
        fontSize:15,
        fontWeight:'bold',
        color:'black'
    }
})


export default TelaInicial