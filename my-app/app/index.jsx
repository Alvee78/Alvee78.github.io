import { Text, View, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import MyAppBar from './appbar';

const Home = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();
            setCategories(data.categories);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    const renderItem = ({ item }) => (
        <View style = {{ flexDirection: 'row'}}>
            <Image style={{ width: 50, height: 50, margin: 10}} source={{ uri: item.strCategoryThumb }  } />
            <Text style = {{fontSize: 22,padding: 10}}>{item.strCategory}</Text>
        </View>
    );

    return (
        <View>
            <MyAppBar />
            <FlatList
                data={categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={({ item }) => (
                  <View style = {{ flexDirection: 'row'}}>
                      <Image style={{ width: 50, height: 50, margin: 10}} source={{ uri: item.strCategoryThumb }  } />
                      <Text style = {{fontSize: 22,padding: 10}}>{item.strCategory}</Text>
                  </View>
              )}
            />
            <Text>My Home</Text>
        </View>
    );
};

export default Home;

