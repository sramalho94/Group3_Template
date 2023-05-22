import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Screen2'
>;

type Props = {};

const Screen2 = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView>
      <View>
        <Text>Screen2</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;
