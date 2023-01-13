import { StatusBar } from 'expo-status-bar';
import Login from './screens/login';
import Signup from './screens/signup';
import ResetPassword from './screens/resetPass';
import TodoList from './screens/TodoList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// <StatusBar style="auto" />
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='TodoList'
          component={TodoList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

