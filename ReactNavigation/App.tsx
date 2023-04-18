import * as React from 'react';
import {Alert, Button, Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{
        width: 40,
        height: 40,
      }}
      source={{uri: 'https://loremflickr.com/640/360'}}
    />
  );
}

function Feed({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Messages({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Messages</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Nested() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerRight: () => (
              <Button
                title="Info"
                color={'#fff'}
                onPress={() =>
                  Alert.alert('This is a button!', 'This is the alert text.', [
                    {text: 'Cancel', style: 'cancel'},
                    {text: 'Ask me later'},
                    {text: 'OK', style: 'destructive'},
                  ])
                }
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({
            title: route.params.name,
            headerStyle: {backgroundColor: 'red'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: '800'},
          })}
        />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{itemId: 42}}
            options={{headerTitle: props => <LogoTitle {...props} />}}
          />
          <Stack.Screen
            name="Nested"
            component={Nested}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
