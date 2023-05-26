import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Feed from '../screens/Feed';
import PostDetail from '../screens/PostDetail';

const Stack = createNativeStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PostDetail"
        component={PostDetail} />
    </Stack.Navigator>
  )
}

export default FeedStack

const styles = StyleSheet.create({})