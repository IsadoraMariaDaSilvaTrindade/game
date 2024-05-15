import { View,Text,TextInput } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export function SignIn(){
     const[text, setText] = useState("Escreva alguma coisa:  ")

     return (

     <View style = {styles.container}>
     <Text>
      qualquer coisa
     </Text>
     <TextInput style = {styles.input}
     onChangeText={setText}
     /> 
      <Text>
        Você digitou: {text}

     </Text>
     </View> ) }


