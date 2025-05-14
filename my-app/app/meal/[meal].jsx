import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function MealPage() {
  const { meal } = useLocalSearchParams();
  const [mealData, setMealData] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
      .then(res => res.json())
      .then(data => data.meals ? setMealData(data.meals[0]) : null)
      .catch(() => setMealData(null));
  }, [meal]);

  if (!mealData) return <Text>Loading...</Text>;

  return (
    <ScrollView>
      <Image 
        source={{ uri: mealData.strMealThumb }} 
        style={{ width: 200, height: 200 }}
      />
      <Text>{mealData.strMeal}</Text>
      <Text>Category: {mealData.strCategory}</Text>
      <Text>Area: {mealData.strArea}</Text>
      
      <Text>Instructions:</Text>
      <Text>{mealData.strInstructions}</Text>
      
      <Text>Ingredients:</Text>
      {Object.keys(mealData).map((key) => {
        if (key.startsWith('strIngredient') && mealData[key]) {
          return (
            <Text key={key}>
              • {mealData[key]} - {mealData[`strMeasure${key.slice(13)}`]}
            </Text>
          );
        }
        return null;
      })}
      
      {mealData.strSource && (
        <Text>Source: {mealData.strSource}</Text>
      )}
    </ScrollView>
  );
}