import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OneRepMaxPage = () => {
  const [weight, setWeight] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [oneRepMax, setOneRepMax] = useState('');

  const calculateOneRepMax = () => {
    if (weight && repetitions) {
      const w = parseFloat(weight);
      const r = parseFloat(repetitions);
      const oneRm = w / ((1.0278) - (0.0278 * r));
      setOneRepMax(oneRm.toFixed(2));
    } else {
      setOneRepMax('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculate 1 Rep Max</Text>

      <TextInput
        style={styles.input}
        placeholder="Weight (lbs)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Repetitions"
        value={repetitions}
        onChangeText={setRepetitions}
        keyboardType="numeric"
      />

      <Button title="Calculate" onPress={calculateOneRepMax} />

      {oneRepMax ? (
        <Text style={styles.result}>1 Rep Max: {oneRepMax} lbs</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default OneRepMaxPage;
