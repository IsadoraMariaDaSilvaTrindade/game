import { View,Text,Image,} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import imagem from '../'
export function SignIn(){
     const[text, setText] = useState("Escreva alguma coisa:  ")

     return (

     <View style = {styles.container}>
    <Image source={}/>
    </View> 
  
  ) }