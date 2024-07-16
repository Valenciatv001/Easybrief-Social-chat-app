// import { Tabs } from "expo-router";
// import React from "react";

// import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
// import { Colors } from "@/src/constants/Colors";
// import { useColorScheme } from "@/src/hooks/useColorScheme";

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",

//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon
//               name={focused ? "home" : "home-outline"}
//               color="#1e1e1e"
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return <Slot />;
}
