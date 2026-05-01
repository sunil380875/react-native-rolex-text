import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl font-sans-extrabold ">
        Home
      </Text>
      <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
        Go to Onboarding
      </Link>
      <Link href="/(auth)/signin" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
        Go to SignIn
      </Link>
      <Link href="/(auth)/signup" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
        Go to SignUp
      </Link>
    </SafeAreaView>
  );
} 