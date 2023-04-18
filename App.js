import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, { key: String(items.length), text: newItem }]);
    setNewItem('');
  }

  function deleteItem(key) {
    setItems(items.filter(item => item.key !== key));
  }

  const [newItem, setNewItem] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item a sua lista!"
          value={newItem}
          onChangeText={text => setNewItem(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Feather name="plus" size={24} color="white" />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(item.key)}>
              <Feather name="trash" size={24} color="white" />
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800fff',
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    marginRight: 16,
  },
  addButton: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  addButtonText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#c0392b',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  deleteButtonText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});