import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedStack from './stacks/FeedStack';
import Feed from './screens/Feed';
import Salam from './screens/Salam';

const Tab = createBottomTabNavigator();

const TabMain = () => {
      return (
            <>
                  <Tab.Navigator>
                        <Tab.Screen
                              name='feedstack'
                              component={FeedStack}
                              options={{
                                    headerShown: false,
                              }}
                        />

                        <Tab.Screen
                              name='fddd'
                              component={Salam}
                              options={{
                                    headerShown: false,
                              }}
                        />

                  </Tab.Navigator>
            </>
      )
}

export default TabMain

const styles = StyleSheet.create({})