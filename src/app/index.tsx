import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Top-level TEST TEST TEST</Text>
      <Button
        title="GO ABOUT"
        onPress={() => {
          router.push({
            pathname: "/about",
            params: {
              test: "123",
            },
          });
        }}
      />
    </View>
  );
};
export default Home;
