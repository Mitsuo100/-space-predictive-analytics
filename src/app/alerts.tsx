import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import AlertCard from "../components/AlertCard";
import { useMission } from "../context/MissionContext";

export default function Alerts() {
  const { alerts } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Dashboard de Alertas
      </Text>

      <Text style={styles.counter}>
        Total de Alertas: {alerts.length}
      </Text>

      {alerts.length === 0 ? (
        <Text style={styles.normal}>
          Nenhum alerta ativo
        </Text>
      ) : (
        alerts.map((alert, index) => (
          <AlertCard
            key={index}
            message={alert}
          />
        ))
      )}
    </ScrollView>
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
    marginBottom: 15,
  },

  counter: {
    color: "#4FC3F7",
    fontSize: 18,
    marginBottom: 15,
  },

  normal: {
    color: "#4CAF50",
    fontSize: 18,
  },
});