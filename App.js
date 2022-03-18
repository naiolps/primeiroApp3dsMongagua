import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
export default function App() {
  const [var1, setValor1] = useState();
  const [var2, setValor2] = useState();
  const [r, setResult] = useState();
  function soma(){
    setResult (parseFloat (var1) + parseFloat(var2));
  }
  function subtracao(){
    setResult (parseFloat (var1) - parseFloat(var2));
  }
  function multiplicacao(){
    setResult (parseFloat (var1) * parseFloat(var2));
  }
  function divisao(){
    setResult (parseFloat (var1) / parseFloat(var2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Não pedi pra ser super e não sou herói... </Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.imgur.com/Psrh9jM.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 1 </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={var1}
          placeholder='VALOR 1:'
          onChangeText={(texto)=>setValor1(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 2 </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder='VALOR 2:'
          value={var2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity
        style={styles.botao}
        onPress={soma}>
            <Text style={styles.textoBotao}>SOMAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity
        style={styles.botao}
        onPress={subtracao}>
            <Text style={styles.textoBotao}>SUBTRAIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity
        style={styles.botao}
        onPress={multiplicacao}>
            <Text style={styles.textoBotao}>MULTIPLICAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity
        style={styles.botao}
        onPress={divisao}>
            <Text style={styles.textoBotao}>DIVIDIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.texto}>RESULTADO: {r}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666699',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#000',
    fontSize: 30
  },
  textoBloco:{
    fontSize:30,
  },
  input:{
    borderColor:'#e60000',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#e60000',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:" #000000 ",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5
  }
});