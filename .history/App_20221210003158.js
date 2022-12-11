import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './screens/Login';
// import Main from './screens/Main';
import Home from './screens/Home';
import BroadcastMedia from './screens/BroadcastMedia'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />  
        <Stack.Screen options={{headerShown: false}} name="BroadcastMedia" component={BroadcastMedia} />
        {/* <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}