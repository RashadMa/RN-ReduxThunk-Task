import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import TabMain from './navigation/TabMain';
import { Provider } from 'react-redux';
import { store } from './redux';
const App = () => {

  return (
    <>
      <Provider store={store} >
        <NavigationContainer>
          <TabMain />
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})