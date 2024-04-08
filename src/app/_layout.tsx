import "@/styles/global.css"

import { Slot } from "expo-router" //aqui devolve nossas rotas
import { StatusBar } from "expo-status-bar" // personaliza o status bar, para que a imagem no carregamento pegue a tela inteira

import {
    useFonts,
    Roboto_700Bold, 
    Roboto_500Medium,
    Roboto_400Regular
} from "@expo-google-fonts/roboto"

import { Loading } from "@/components/loading" // import o componente que 

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Roboto_700Bold, 
        Roboto_500Medium,
        Roboto_400Regular
    })
   
    return (
      <>
        <StatusBar style="light" />
        {/* if ternario - se fontsLoaded for carregador retornar as rotas, se não Exibe um indicador de carregamento circular. */}
        {fontsLoaded ? <Slot /> : <Loading />}
      </>
    );

}