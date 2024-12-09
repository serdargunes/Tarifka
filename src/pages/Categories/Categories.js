import React from "react";
import {Text,View,FlatList } from "react-native";
import CategoriesCard from "../../components/CategoriesCard";
import useFetch from "../../components/useFetch";
import styles from './Categories.style'
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const Categories = ({ navigation }) => {

    const { loading, error, data: categories } = useFetch(Config.CATEGORY_URL)

    const handleSelect = (id) => {
        navigation.navigate('MealsPage', { id })
    }

    const renderCategory = (item) => <CategoriesCard category={item} onSelect={() => handleSelect(item.item.strCategory)} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={categories.categories}
                renderItem={renderCategory}
            />
        </View>
    )
}

export default Categories