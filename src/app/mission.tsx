import { View, Text, StyleSheet } from "react-native";
import { useMission } from "../context/MissionContext";

export default function Mission() {
  const { telemetry } = useMission();

  const status =
    telemetry.energy < 20 ||
    telemetry.signal < 30
      ? "CRÍTICO"
      : telemetry.temperature > 80
      ? "ATENÇÃO"
      : "NORMAL";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Resumo da Missão
      </Text>

      <Text style={styles.info}>
        Status Atual: {status}
      </Text>

      <Text style={styles.info}>
        Temperatura: {telemetry.temperature}°C
      </Text>

      <Text style={styles.info}>
        Energia: {telemetry.energy}%
      </Text>

      <Text style={styles.info}>
        Sinal: {telemetry.signal}%
      </Text>

      <Text style={styles.info}>
        Estabilidade: {telemetry.stability}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  info: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
});