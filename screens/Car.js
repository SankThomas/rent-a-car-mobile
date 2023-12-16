import {
  Image,
  Pressable,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Home({ navigation, route }) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 32,
      }}
      className="flex-1 bg-gray-950"
    >
      <View className="absolute top-0 left-0 w-full flex flex-row items-center justify-between z-10 pt-16 px-4">
        <Ionicons
          name="chevron-back"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text className="text-white text-lg font-bold">Details</Text>
        <AntDesign name="search1" size={24} color="white" />
      </View>

      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        className="flex gap-4 mt-4"
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 100 }}
      >
        {route.params.images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            className="w-72 h-52 rounded-lg"
          />
        ))}
      </ScrollView>

      <View className="pt-8 px-4">
        <Text className="text-gray-200 text-xl font-bold">
          {route.params.name}
        </Text>
        <Text className="text-white font-bold text-3xl mt-2">
          {route.params.price}
        </Text>
      </View>

      <View className="flex flex-row flex-wrap gap-2 items-center justify-center px-4 pt-8">
        <View className="flex items-center bg-gray-900 p-2 rounded-lg w-[90px]">
          <Text className="text-gray-400 text-center mb-2">Top Speed</Text>
          <Ionicons name="speedometer-outline" size={24} color="white" />
          <Text className="text-white text-lg text-center mt-2">
            {route.params.maxSpeed}
          </Text>
        </View>

        <View className="flex items-center bg-gray-900 p-2 rounded-lg w-[90px]">
          <Text className="text-gray-400 text-center mb-2">Mileage</Text>
          <FontAwesome5 name="fire-alt" size={24} color="white" />
          <Text className="text-white text-lg text-center mt-2">
            {route.params.mileage}
          </Text>
        </View>

        <View className="flex items-center bg-gray-900 p-2 rounded-lg w-[90px]">
          <Text className="text-gray-400 text-center mb-2">Fuel Type</Text>
          <MaterialCommunityIcons
            name="gas-station-outline"
            size={24}
            color="white"
          />
          <Text className="text-white text-lg text-center mt-2">
            {route.params.fuel}
          </Text>
        </View>

        <View className="flex items-center bg-gray-900 p-2 rounded-lg w-[90px]">
          <Text className="text-gray-400 text-center mb-2">Torque</Text>
          <Ionicons name="speedometer-outline" size={24} color="white" />
          <Text className="text-white text-lg text-center mt-2">
            {route.params.torque}
          </Text>
        </View>

        <View className="flex items-center bg-gray-900 p-2 rounded-lg w-[90px]">
          <Text className="text-gray-400 text-center mb-2">Horsepower</Text>
          <FontAwesome5 name="fire-alt" size={24} color="white" />
          <Text className="text-white text-lg text-center mt-2">
            {route.params.horsepower}
          </Text>
        </View>

        <View className="flex items-center bg-gray-900 p-2 rounded-lg w-[90px]">
          <Text className="text-gray-400 text-center mb-2">Transmission</Text>
          <MaterialCommunityIcons
            name="gas-station-outline"
            size={24}
            color="white"
          />
          <Text className="text-white text-lg text-center mt-2">
            {route.params.transmission}
          </Text>
        </View>
      </View>

      <View className="px-4 pt-8">
        <Text className="text-white text-base text-justify">
          {route.params.details}
        </Text>
      </View>

      <View className="flex flex-row items-center justify-between gap-4 px-4 mt-4">
        <TouchableOpacity className="flex-1">
          <Text className="bg-gray-800 text-white font-bold text-base py-3 rounded-lg text-center">
            Message seller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1">
          <Text className="bg-indigo-600 text-white font-bold text-base py-3 rounded-lg text-center">
            Buy now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
