import { cars } from "../data";
import {
  Image,
  Pressable,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [cards] = useState(cars);
  const [value] = useState(0);

  const { images } = cards[value];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 32,
      }}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-gray-950"
    >
      <View className="absolute top-0 left-0 w-full flex flex-row items-center justify-between z-10 pt-16 px-4">
        <Entypo name="menu" size={24} color="white" />
        <AntDesign name="search1" size={24} color="white" />
      </View>

      <TouchableOpacity className="relative">
        <Image
          source={{ uri: images[1] }}
          className="w-full h-72 object-cover"
        />
        <Text className="absolute bottom-4 left-4 font-bold text-4xl text-white">
          Featured
        </Text>
      </TouchableOpacity>

      <View className="flex flex-row items-center justify-between mt-8 mb-4 px-4">
        <Text className="text-xl text-white font-bold">View auction</Text>
        <Pressable>
          <Text className="text-white">View all</Text>
        </Pressable>
      </View>

      <View className="flex gap-8 px-4">
        {cars.map((car, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Car", car)}
            className="relative"
          >
            <Image
              source={{ uri: car.images[2] }}
              className="w-full h-40 rounded-lg object-cover"
            />
            <Text className="absolute top-2 left-2 z-10 text-blue-600 font-bold text-lg bg-white py-1 px-2 rounded">
              {car.price}
            </Text>
            <View>
              <Text className="font-bold text-xl text-white mt-2">
                {car.name}
              </Text>
              <Text className="text-base text-neutral-200">
                {car.transmission}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
