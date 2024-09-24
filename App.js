import {StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;
