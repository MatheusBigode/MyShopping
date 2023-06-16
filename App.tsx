import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Produtos } from './src/screens/Produtos_/Produtos';
import { Comprovantes } from './src/screens/Comprovantes_/Comprovantes';
import { Upload } from './src/screens/Uploads_/Upload';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Produtos'>
      <Tab.Screen name="Produtos" component={Produtos}
      options = {{title: 'Lista de compras',tabBarActiveTintColor: '#7d78da',
      headerTintColor: 'white', 
      headerStyle: {
        backgroundColor: '#7d78da'
      }}}
      /> 
      <Tab.Screen name="Comprovantes" component={Comprovantes} 
      options = {{title: 'Lista de compras', tabBarActiveTintColor: '#7d78da', headerTintColor: 'white', 
      headerStyle: {
        backgroundColor: '#7d78da'
      }}}
      />
      <Tab.Screen name="Upload" component={Upload} 
      options = {{title: 'Lista de compras', tabBarActiveTintColor: '#7d78da',
      headerTintColor: 'white', 
      headerStyle: {
        backgroundColor: '#7d78da'
      }}}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}