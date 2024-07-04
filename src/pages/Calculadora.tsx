import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { NavegatorService } from '../service/NavegatorService';
import Navbar from '../components/NavBar';

export default function Calculadora(NavegatorService: NavegatorService){
  const [paper, setPaper] = useState<string>('');
  const [plastic, setPlastic] = useState<string>('');
  const [glass, setGlass] = useState<string>('');
  const [metal, setMetal] = useState<string>('');
  const [emission, setEmission] = useState<number | null>(null);

  const calculateEmission = () => {
    const paperAmount = parseFloat(paper) || 0;
    const plasticAmount = parseFloat(plastic) || 0;
    const glassAmount = parseFloat(glass) || 0;
    const metalAmount = parseFloat(metal) || 0;

    const co2Emission = (
      paperAmount * 3.17 +  // Exemplo: 1 kg de papel reciclado economiza 3.17 kg de CO2
      plasticAmount * 2.5 + // Exemplo: 1 kg de plástico reciclado economiza 2.5 kg de CO2
      glassAmount * 0.315 + // Exemplo: 1 kg de vidro reciclado economiza 0.315 kg de CO2
      metalAmount * 9.0     // Exemplo: 1 kg de metal reciclado economiza 9.0 kg de CO2
    );

    setEmission(co2Emission);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Reciclagem</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Quantidade de papel (kg)"
        keyboardType="numeric"
        value={paper}
        onChangeText={setPaper}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de plástico (kg)"
        keyboardType="numeric"
        value={plastic}
        onChangeText={setPlastic}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de vidro (kg)"
        keyboardType="numeric"
        value={glass}
        onChangeText={setGlass}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de metal (kg)"
        keyboardType="numeric"
        value={metal}
        onChangeText={setMetal}
      />

      <Button color="green"  title="Calcular Economia de CO₂" onPress={calculateEmission} />
      {emission !== null && (
        <Text style={styles.result}>
          Economia de CO₂: {emission.toFixed(2)} kg
        </Text>
      )}
    <Navbar route={NavegatorService.navigation.navigate}></Navbar>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    width: '80%',
  },
  result: {
    marginTop: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});


