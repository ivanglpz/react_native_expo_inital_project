import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Home = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Text>about test</Text>
      <Text>{params?.test}</Text>
      <Button
        title="GO HOME"
        onPress={() => {
          router.push({
            pathname: "/",
          });
        }}
      />
    </View>
  );
};
export default Home;
