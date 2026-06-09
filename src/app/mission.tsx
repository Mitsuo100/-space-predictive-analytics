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
      <Text style={styles.mainTitle}>
        Resumo da Missão
      </Text>

      <Text style={styles.info}>
        Status Atual: {status}
      </Text>

      <Text style={styles.sectionTitle}>
        Dashboard de Energia
      </Text>

      <Text style={styles.info}>
        Energia restante: {telemetry.energy}%
      </Text>

      <Text style={styles.info}>
        Consumo: {100 - telemetry.energy}%
      </Text>

      <Text style={styles.info}>
        Estabilidade orbital: {telemetry.stability}%
      </Text>

      <Text style={styles.sectionTitle}>
        Dashboard de Comunicação
      </Text>

      <Text style={styles.info}>
        Qualidade do sinal: {telemetry.signal}%
      </Text>

      <Text style={styles.info}>
        Status:
        {telemetry.signal < 30
          ? " CRÍTICO"
          : " OPERACIONAL"}
      </Text>

      <Text style={styles.sectionTitle}>
        Dashboard de Sensores
      </Text>

      <Text style={styles.info}>
        Temperatura: {telemetry.temperature}°C
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  mainTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#4FC3F7",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  info: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
});