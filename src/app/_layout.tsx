import { Stack } from "expo-router";
import { MissionProvider } from "../context/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0B1026",
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#070B1A",
          },
        }}
      />
    </MissionProvider>
  );
}
