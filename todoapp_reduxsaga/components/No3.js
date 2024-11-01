// src/components/No3.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { addItemRequest } from '../redux/actions';

function No3({ navigation }) {
  const [newToDo, setNewToDo] = useState('');
  const dispatch = useDispatch();

  const addNewItem = () => {
    if (newToDo.trim() === '') {
      alert('Please enter a to-do.');
      return;
    }
    dispatch(addItemRequest(newToDo));
    setNewToDo('');
    navigation.navigate('No2');
  };

  return (
    <SafeAreaView style={styles.no3}>
      <View style={styles.row1}>
        <View style={styles.user}>
          <Image
            style={styles.userImg}
            source={require('../assets/img/img1.png')}
          />
          <View style={styles.userText}>
            <Text style={styles.textUser1}>Hi</Text>
            <Text style={styles.textUser2}>Have a great day ahead</Text>
          </View>
        </View>
        <Pressable
            onPress={() => navigation.goBack()}>
            <Image source={require('../assets/img/arrow.png')} />
        </Pressable>
      </View>

      <View style={styles.row2}>
        <View style={styles.inputSearch}>
          <Image source={require('../assets/img/toDo.png')} />
          <TextInput
            placeholder="Input your job"
            value={newToDo}
            onChangeText={setNewToDo}
          />
        </View>
        <Pressable style={styles.buttonFinish} onPress={addNewItem}>
          <Text style={styles.text}>FINISH → </Text>
        </Pressable>
        <Image
          style={{ width: 190, height: 170 }}
          source={require('../assets/img/img1.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  no3: {
    flex: 1,
    padding: 20,
  },
  userImg: {
    width: 45,
    height: 45,
    backgroundColor: 'pink',
    borderRadius: 100,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  user: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textUser1: {
    color: '#4A4D52',
    fontSize: 21,
    paddingLeft: 10,
    fontWeight: '700',
  },
  textUser2: {
    color: 'gray',
    fontWeight: '700',
  },
  row2: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputSearch: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 4,
    width: '95%',
    marginBottom: 50,
  },
  buttonFinish: {
    paddingVertical: 7,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: '#00BDD6',
    marginBottom: 100,
  },
});

export default No3;
