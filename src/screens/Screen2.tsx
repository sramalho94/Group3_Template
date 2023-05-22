import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Screen2'
>;

type Props = {};

const Screen2 = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Screen2</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;
