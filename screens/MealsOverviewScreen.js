import {StyleSheet, FlatList, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route}) {
    // const route= useRoute();
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title}/>;
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} keyExtractor={(item) => item.id}></FlatList>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
});