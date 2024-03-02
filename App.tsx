import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './components/Main'
import Calculator from './components/Calculator'
import LocalizationShowcase from './components/LocalizationShowcase'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Calculator' component={Calculator} />
        <Stack.Screen name='LocalizationShowcase' component={LocalizationShowcase} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}