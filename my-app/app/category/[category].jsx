import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function CategoryPage() {
  const { category } = useLocalSearchParams();
  const [meals, setMeals] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals));
  }, [category]);

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.idMeal}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/meal/${item.idMeal}`)}>
          <Image 
            source={{ uri: item.strMealThumb }} 
            style={{ width: 200, height: 200 }}
          />
          <Text>{item.strMeal}</Text>
        </TouchableOpacity>
      )}
    />
  );
}