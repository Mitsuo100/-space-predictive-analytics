import { View, ScrollView, StyleSheet, Button } from "react-native";
import DashboardCard from "../components/DashboardCard";
import { useMission } from "../context/MissionContext";
import { router } from "expo-router";

export default function Home() {
  const { telemetry } = useMission();

  return (
    <ScrollView style={styles.container}>
      <DashboardCard
        title="Temperatura"
        value={`${telemetry.temperature}°C`}
      />

      <DashboardCard
        title="Energia"
        value={`${telemetry.energy}%`}
      />

      <DashboardCard
        title="Sinal"
        value={`${telemetry.signal}%`}
      />

      <DashboardCard
        title="Estabilidade"
        value={`${telemetry.stability}%`}
      />

      <Button
        title="Ver Alertas"
        onPress={() => router.push("/alerts")}
      />

      <Button
        title="Configurações"
        onPress={() => router.push("/settings")}
      />

      <Button
        title="Missão"
        onPress={() => router.push("/mission")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});