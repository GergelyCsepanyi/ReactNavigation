import React from 'react';
import {View, Text, Button} from 'react-native';
import {} from '@react-navigation/native/src/types';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type RootStackParamList = {
//   Home: undefined;
//   Profile: {userId: string};
//   Feed: {sort: 'latest' | 'top'} | undefined;
//   Details: {itemId: number} | undefined;
// };

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;

export default function HomeScreen({navigation} /*: Props*/) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 86})}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Username'})}
      />
      <Button
        title="Go to Nested"
        onPress={() => navigation.navigate('Nested')}
      />
    </View>
  );
}
