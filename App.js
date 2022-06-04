/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import axios from 'axios';
import {} from 'native-base';

const URL = "https://randomuser.me/api/";

const App = () => {
  const [details, setDetails] = useState(null);
  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`${URL}`);
      const details = data.results[0];
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <Text>Hello React Native App</Text>
    </SafeAreaView>
  );
};

export default App;
