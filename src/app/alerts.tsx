import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useMission } from "../context/MissionContext";
import AlertCard from "../components/AlertCard";

export default function Alerts() {
  const { alerts } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Alertas da Missão
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
    marginBottom: 20,
    fontWeight: "bold",
  },

  normal: {
    color: "#4CAF50",
    fontSize: 18,
  },
});