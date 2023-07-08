import React, { useContext, useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList } from 'react-native';
import { ExerciseContext } from './ExerciseContext';

const SpreadsheetPage = () => {
  const { addExercise, exercises, deleteExercise } = useContext(ExerciseContext);

  const [newExercise, setNewExercise] = useState({
    name: '',
    type: 'Push',
    sets: '',
    reps: '',
    weight: '',
  });

  const handleAddExercise = () => {
    addExercise(newExercise);
    setNewExercise({
      name: '',
      type: 'Push',
      sets: '',
      reps: '',
      weight: '',
    });
  };

  const handleDeleteExercise = (exercise) => {
    deleteExercise(exercise.id);
  };

  const renderExerciseRow = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.type}</Text>
      <Text style={styles.rowText}>{item.sets}</Text>
      <Text style={styles.rowText}>{item.reps}</Text>
      <Text style={styles.rowText}>{item.weight}</Text>
      <Button title="Delete" onPress={() => handleDeleteExercise(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Spreadsheet</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Exercise Name"
          value={newExercise.name}
          onChangeText={(text) => setNewExercise({ ...newExercise, name: text })}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Type:</Text>
          <View style={styles.pickerButtons}>
            <Button title="Push" onPress={() => setNewExercise({ ...newExercise, type: 'Push' })} />
            <Button title="Pull" onPress={() => setNewExercise({ ...newExercise, type: 'Pull' })} />
            <Button title="Legs" onPress={() => setNewExercise({ ...newExercise, type: 'Legs' })} />
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Sets"
          value={newExercise.sets}
          onChangeText={(text) => setNewExercise({ ...newExercise, sets: text })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Reps"
          value={newExercise.reps}
          onChangeText={(text) => setNewExercise({ ...newExercise, reps: text })}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={newExercise.weight}
          onChangeText={(text) => setNewExercise({ ...newExercise, weight: text })}
          keyboardType="numeric"
        />
        <Button title="Add Exercise" onPress={handleAddExercise} />
      </View>

      <View style={styles.labelRow}>
        <Text style={styles.label}>Exercise Name</Text>
        <Text style={styles.label}>Type</Text>
        <Text style={styles.label}>Sets</Text>
        <Text style={styles.label}>Reps</Text>
        <Text style={styles.label}>Weight</Text>
        <Text style={styles.label}></Text>
      </View>

      <FlatList
        data={exercises}
        renderItem={renderExerciseRow}
        keyExtractor={(item, index) => index.toString()}
      />
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
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  inputRow: {
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
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  pickerLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  pickerButtons: {
    flexDirection: 'row',
  },
});

export default SpreadsheetPage;
