import { StyleSheet } from "nativewind";
import { TouchableOpacity, Text, ActivityIndicator , TouchableOpacityProps} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title,  isLoading = false, ...rest}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      style={styles.button}
      
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-500 text-base font-bold uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F48F56",
    height: 50, // Ajuste a altura conforme necessário
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
