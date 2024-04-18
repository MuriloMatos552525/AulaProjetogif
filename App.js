import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import TelaInicial from "./src/telas/TelaInicial";
import TelaResultado from "./src/telas/TelaResultado";
import TelaDetalhes from "./src/telas/TelaDetalhes";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator()

const App = () =>{

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='TelaInicial'
          component={TelaInicial}
          options={{headerShown:false}}
        />

        <Stack.Screen name='TelaResultado' 
        component={TelaResultado} 
        options={{headerShown:false}}
        />

        <Stack.Screen name='TelaDetalhes' component={TelaDetalhes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App