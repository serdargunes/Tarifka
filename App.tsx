import React from "react";
import { SafeAreaView,View,Text,FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

import Detail from './src/pages/Detail/Detail'
import Meals from './src/pages/Meals/Meals'
import Categories from "./src/pages/Categories/Categories";
const Stack = createNativeStackNavigator();

const tarifka = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTitleStyle: {
            color: '#ffa500',
          },
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='MealsPage' component={Meals} options={{
          title: 'Meals',
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTitleStyle: {
            color: '#ffa500',
          },
          headerTintColor: '#ffa500',
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='DetailPage' component={Detail} options={{
          title: 'Meals',
          headerStyle: {
            backgroundColor: 'White',
          },
          headerTitleStyle: {
            color: '#ffa500',
          },
          headerTintColor: '#ffa500',
          headerTitleAlign: 'center',
        }} />

      </Stack.Navigator>
    </NavigationContainer >
  )
}
export default tarifka;