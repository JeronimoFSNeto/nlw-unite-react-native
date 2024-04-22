// personaliza o status bar, para que a imagem no carregamento pegue a tela inteira
import {
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useState } from "react"
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import colors, { white } from "tailwindcss/colors";

import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

export default function Home() {
  const [code, setCode] = useState("")
 
  //criar uma função
  function handleAccessCredential(){
    if(!code.trim()) {
      return Alert.alert("Credencial", "Informe o código do ingresso!")
    }
  }

  return (
    // <View className="flex-1 justify-center items-center bg-green-500 p-8">
    //   <StatusBar barStyle={"light-content"} />
    //   <Link  href="/home" style={{color: 'blue'}}>HOME</Link>
      
    // </View>
    <SafeAreaView style={styles.safearea}>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
          <View className="w-full h-full justify-center items-center px-4">
            <Image
              source={images.logo}
              className="w-[260px] h-[168px]"
              resizeMode="contain"
            />

            <Image
              source={images.cards}
              className="max-w--[380px] w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">Venha conhecer {' '}<Text className="text-orange-500">Eat Ease</Text></Text>
            
            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
            </View>
            <Text className="text-sm font-regular text-gray-100 mt-7 text-center">asdasd asd asd as da das d asd: asdsad</Text>
            <Button 
              title="Conhecer Eat Ease"
              
            />
          </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
safearea: {
backgroundColor: colors.white,
height: '100%'
}
});
