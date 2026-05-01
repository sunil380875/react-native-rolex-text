import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-1 rounded bg-primary text-white p-4">
        Go to Onboarding
      </Link>
      <Link href="/(auth)/signin" className="mt-1 rounded bg-primary text-white p-4">
        Go to SignIn
      </Link>
      <Link href="/(auth)/signup" className="mt-1 rounded bg-primary text-white p-4">
        Go to SignUp
      </Link>
      <Link href="/subscriptions/spotify">Spotify subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" }
      }}>
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
} 