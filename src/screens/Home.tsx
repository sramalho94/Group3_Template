import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
