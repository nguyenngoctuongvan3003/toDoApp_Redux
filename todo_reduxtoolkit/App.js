// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';
import No1 from './components/No1'; 
import No2 from './components/No2';
import No3 from './components/No3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="No1"
            component={No1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="No2"
            component={No2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="No3"
            component={No3}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
