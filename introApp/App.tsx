import Home from '../introApp/screens/Home';
import About from '../introApp/screens/About';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{title: 'Página principal'}}
          />
          <Stack.Screen
            name='About'
            component={About}
            options={{title: 'Página acerca de'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
