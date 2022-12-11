import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import BroadcastMedia from './screens/BroadcastMedia'
import Computing from './screens/Computing'
import Marketing from './screens/Marketing'
import BusinessFinance from './screens/BusinessFinance'
import DigitalArtsDesign from './screens/DigitalArtsDesign'
import Tutoring from './screens/Tutoring'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />  
        <Stack.Screen options={{headerShown: false}} name="BroadcastMedia" component={BroadcastMedia} />
        <Stack.Screen options={{headerShown: false}} name="Computing" component={Computing} /> 
        <Stack.Screen options={{headerShown: false}} name="Marketing" component={Marketing} />
        <Stack.Screen options={{headerShown: false}} name="BusinessFinance" component={BusinessFinance} /> 
        <Stack.Screen options={{headerShown: false}} name="DigitalArtsDesign" component={DigitalArtsDesign} /> 
        <Stack.Screen options={{headerShown: false}} name="Tutoring" component={Tutoring} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}