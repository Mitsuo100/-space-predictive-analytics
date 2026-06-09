import {
  ScrollView,
  StyleSheet,
  Button,
  Text,
} from "react-native";

import DashboardCard from "../components/DashboardCard";
import { useMission } from "../context/MissionContext";
import { router } from "expo-router";

export default function Home() {
  const { telemetry, alerts } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Space Predictive Analytics
      </Text>

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

      <Text style={styles.alertText}>
        Alertas Ativos: {alerts.length}
      </Text>

      <Button
        title="Ver Alertas"
        onPress={() => router.push("/alerts")}
      />

      <Button
        title="Missão"
        onPress={() => router.push("/mission")}
      />

      <Button
        title="Configurações"
        onPress={() => router.push("/settings")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  alertText: {
    color: "white",
    fontSize: 18,
    marginVertical: 20,
  },
});