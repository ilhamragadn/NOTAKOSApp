import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Alokasi from './screens/Alokasi';
import CatatPemasukan from './screens/CatatPemasukan';
import CatatPengeluaran from './screens/CatatPengeluaran';
import Ekstra from './screens/Ekstra';
import Home from './screens/Home';
import Profil from './screens/Profil';
import AddNoteIncome from './screens/note_income/AddNoteIncome';
import AddNoteOutcome from './screens/note_outcome/AddNoteOutcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alokasi" component={Alokasi} />
        <Stack.Screen name="CatatPemasukan" component={CatatPemasukan} />
        <Stack.Screen name="AddNoteIncome" component={AddNoteIncome} />
        <Stack.Screen name="CatatPengeluaran" component={CatatPengeluaran} />
        <Stack.Screen name="AddNoteOutcome" component={AddNoteOutcome} />
        <Stack.Screen name="Ekstra" component={Ekstra} />
        <Stack.Screen name="Profil" component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
