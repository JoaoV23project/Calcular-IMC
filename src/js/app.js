import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('M');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularIMC() {
    const imc = peso / (altura * altura);
    let condicao = '';

    if (sexo === 'F') {
      if (imc < 19.1) condicao = 'Abaixo do peso';
      else if (imc <= 25.8) condicao = 'Normal';
      else if (imc <= 27.3) condicao = 'Marginalmente acima';
      else if (imc <= 32.3) condicao = 'Acima do peso';
      else condicao = 'Obeso';
    } else {
      if (imc < 20.7) condicao = 'Abaixo do peso';
      else if (imc <= 26.4) condicao = 'Normal';
      else if (imc <= 27.8) condicao = 'Marginalmente acima';
      else if (imc <= 31.1) condicao = 'Acima do peso';
      else condicao = 'Obeso';
    }

    setResultado(`${nome}\nIMC: ${imc.toFixed(2)}\nCondição: ${condicao}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

      <TextInput placeholder="Nome" onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Sexo (M/F)" onChangeText={setSexo} style={styles.input} />
      <TextInput placeholder="Peso (kg)" keyboardType="numeric" onChangeText={setPeso} style={styles.input} />
      <TextInput placeholder="Altura (m)" keyboardType="numeric" onChangeText={setAltura} style={styles.input} />

      <Button title="Calcular" onPress={calcularIMC} />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  resultado: { marginTop: 20, fontSize: 16 }
});