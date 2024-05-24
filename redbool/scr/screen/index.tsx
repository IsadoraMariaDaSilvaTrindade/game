import { View,Text,Image,} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import imagem from '../assets/illustration.png'
export function SignIn(){
     const[text, setText] = useState("Escreva alguma coisa:  ")

     return (

     <View style = {styles.container}>
    <Image source={imagem} style={styles.image}resizeMode='stretch'/>
    <View style= {styles.content}>
      <Text style= {styles.title}>
        Organize Suas {`\n`}
        Jogatinas {`\n`}
        facilmente
      </Text>
      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos seus besties

      </Text>
    </View>
    </View> 
  
  );
 }