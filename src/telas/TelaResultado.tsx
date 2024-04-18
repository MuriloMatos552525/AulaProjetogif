import { Text } from "react-native";
import React from "react";

const TelaResultado = ({route}) =>{
    const escolha = route.params.escolha;
    const link = `api.giphy.com/v1/${escolha}/search`

    console.log(link)

    return(
        <Text>TELA RESULTADO</Text>
    )
}

export default TelaResultado