import { ReactNode } from "react";
// Imporar tbm o TextInputProps, para conseguir tipar 
import { TextInput, View, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";


// function Input(){     -  informo que vai ter um filho
    function Input({children}:{children: ReactNode}) {
      return <View className="w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg">{children}</View>;
    }
// quebrar em parte e juntar para montar o componente que eu quiser
// field vai ser o campo
// ...rest =  estou pegando todas as propriedades do TextInput
function Field({...rest}: TextInputProps){
// function Field(){
    return (
    	<TextInput 
        className="flex-1 text-white text-base font-regular"
        placeholderTextColor={colors.gray[200]}
    	{...rest}
    />
  )
}

Input.Field = Field

export {Input}