import {StyleSheet, StatusBar} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <>
            <StatusBar style='dark'/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {},
});
