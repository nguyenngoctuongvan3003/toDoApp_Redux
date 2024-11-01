// src/components/No2.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import {
  fetchItemsRequest,
  deleteItemRequest,
  updateItemRequest,
} from '../redux/actions';

function No2({ navigation }) {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchItemsRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItemRequest(id));
  };

  const handleUpdate = (id, updatedText) => {
    dispatch(updateItemRequest(id, updatedText));
  };

  const Item = ({ item }) => {
    const [isEditable, setIsEditable] = React.useState(false);
    const [toDo, setToDo] = React.useState(item.toDo);

    return (
      <View style={styles.toDo}>
        <View style={styles.toDoContent}>
          <Image source={require('../assets/img/toDo.png')} />
          <TextInput
            style={styles.input}
            value={toDo}
            editable={isEditable}
            onChangeText={setToDo}
          />
        </View>
        <Pressable onPress={() => {
          if (isEditable) {
            handleUpdate(item.id, toDo);
          }
          setIsEditable(!isEditable);
        }}>
          <Image
            source={isEditable
              ? require('../assets/img/save.png')
              : require('../assets/img/edit.png')}
            style={styles.imgButton}
          />
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
          <Image
            source={require('../assets/img/delete.png')}
            style={styles.imgButton}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.no2}>
      <View style={{ flex: 1 }}>
        <View style={styles.row1}>
          <Pressable
            onPress={() => navigation.goBack()}>
            <Image source={require('../assets/img/arrow.png')} />
          </Pressable>
          
          <View style={styles.user}>
            <Image
              style={styles.userImg}
              source={require('../assets/img/img1.png')}
            />
            <View style={styles.userText}>
              <Text style={styles.textUser1}>Hi User</Text>
              <Text style={styles.textUser2}>Have a great day ahead</Text>
            </View>
          </View>
        </View>

        <View style={[styles.row2, { flex: 8 }]}>
          <View style={styles.inputSearch}>
            <Image source={require('../assets/img/search.png')} />
            <TextInput placeholder="Search" />
          </View>

        <FlatList
          style={{ width: '100%' }}
          data={items}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
          refreshing={loading}
          onRefresh={() => dispatch(fetchItemsRequest())}
        />

          <Pressable
            style={styles.add}
            onPress={() => navigation.navigate('No3')}>
            <Image
              style={styles.addImg}
              source={require('../assets/img/plus.png')}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  no2: {
    flex: 1,
    padding: 8,
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
  toDo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CCCED1',
    width: '95%',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 'auto',
  },
  toDoContent: {
    flexDirection: 'row',
  },
  add: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: '#00BDD6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImg: {
    width: 45,
    height: 45,
  },
  imgButton: {
    width: 15,
    height: 15,
  },
});

export default No2;
