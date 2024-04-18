import { Slot, Stack } from "expo-router"; //aqui devolve nossas rotas

import "@/styles/global.css";

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { Loading } from "@/components/loading"; // import o componente que

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  // return <Slot />;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      
    </Stack>
  );
  
}
