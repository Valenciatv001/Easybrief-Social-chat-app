import ChatProvider from "@/src/providers/ChatProvider";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen
          name="(tabsScreen)"
          options={{ headerShown: false, statusBarColor: "black" }}
        />
      </Stack>
    </ChatProvider>
  );
}
