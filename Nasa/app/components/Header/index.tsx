import { Text, View } from "react-native";
export {default} from "./Header";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/components/index.tsx to edit this screen.</Text>
    </View>
  );
}
