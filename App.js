import 'react-native-gesture-handler';
import React, { useState,useEffect, useContext } from "react";
import { StyleSheet, Text, View,StatusBar,ActivityIndicator } from 'react-native';

import ContextProvider from './context/userContext';
import AppNav from "./src/components/appNav";

export default function App() {

  /*useEffect(() => {
    console.log(userToken)
    <StatusBar
    animated={true}
    backgroundColor='#77b7fc'
    barStyle={"dark-content"}
    showHideTransition={"slide"}
  />
  });*/

  return (
    <ContextProvider>
      <AppNav/>
    </ContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
