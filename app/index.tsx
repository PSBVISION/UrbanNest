import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const{isSignedIn, isLoaded} = useAuth();
  if (!isLoaded) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#222",
        }}
      >
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (isSignedIn) return <Redirect href="/(root)/(tabs)" />;
  return <Redirect href="/sign-in" />;
}
