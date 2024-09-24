import {FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';


import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={2}/>;
}

export default CategoriesScreen;