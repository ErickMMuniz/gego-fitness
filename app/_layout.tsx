import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Gego Fitness by Erick" }} />
      <Stack.Screen name="handstand"  options={{ headerTitle: "Gego <> Handstand" }}/>
    </Stack>
  );
}
