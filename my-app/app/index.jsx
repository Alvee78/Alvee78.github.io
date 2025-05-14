import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setCategories(data.categories));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => (
          <TouchableOpacity style={{margin:10}} onPress={() => router.push(`/category/${item.strCategory}`)}>
            <Image 
              source={{ uri: item.strCategoryThumb }} 
              style={{ width: 200, height: 130 }}
            />
            <Text style ={{fontStyle:'bold'}}>{item.strCategory}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}