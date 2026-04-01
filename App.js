import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import TelaFilmes from './screens/TelaFilmes';
import TelaDetalhe from './screens/TelaDetalhe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      {

      }
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TelaFilmes"
          screenOptions={{
            headerStyle: { backgroundColor: '#1565C0' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          {

          }
          <Stack.Screen
            name="TelaFilmes"
            component={TelaFilmes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TelaDetalhe"
            component={TelaDetalhe}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
