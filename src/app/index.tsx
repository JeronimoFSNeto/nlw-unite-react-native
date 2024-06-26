// personaliza o status bar, para que a imagem no carregamento pegue a tela inteira
import { View, Image, StatusBar } from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

import colors from "tailwindcss/colors";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500 p-8">
      <StatusBar barStyle={"light-content"} />
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />

      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.green[200]}
          />
          <Input.Field placeholder="Código do ingresso" />
        </Input>

        <Button title="Acessar a credencial" />
        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui registro?
        </Link>
      </View>
    </View>
  );
}
