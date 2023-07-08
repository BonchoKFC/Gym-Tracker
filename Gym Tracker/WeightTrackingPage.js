import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const WeightTrackingPage = () => {
  const [weightData, setWeightData] = useState([]);
  const [inputWeight, setInputWeight] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('lbs');

  const handleAddWeight = () => {
    if (inputWeight !== '') {
      const weight = parseFloat(inputWeight);
      const newWeightData = [...weightData, weight];
      setWeightData(newWeightData);
      setInputWeight('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weight Tracking</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Weight"
          value={inputWeight}
          onChangeText={setInputWeight}
          keyboardType="numeric"
        />
        <Button title="Add Weight" onPress={handleAddWeight} />
      </View>

      <LineChart
        data={{
          datasets: [
            {
              data: weightData,
            },
          ],
        }}
        width={300}
        height={200}
        yAxisSuffix={selectedUnit}
        chartConfig={{
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  chart: {
    marginTop: 20,
    borderRadius: 16,
  },
});

export default WeightTrackingPage;
