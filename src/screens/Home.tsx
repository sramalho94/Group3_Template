import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {};

const Home = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="min-h-screen min-w-screen bg-[#7CFC00]">
      <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
          <Text>Screen 2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
