import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

const CategoryList = ({categories})=>{
    return (
        <View>
            <FlatList
                data = {categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text style={{ fontSize: 18 }}>{item.strCategory}</Text>
                        <Text style={{ color: '#666' }}>{item.strCategoryDescription}</Text>
                    </View>
                )}
                />
        </View>
    );
};
export default CategoryList;