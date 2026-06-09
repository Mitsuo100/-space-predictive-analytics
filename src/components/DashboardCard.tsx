import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  value: string;
}

export default function DashboardCard({
  title,
  value,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1D2951",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  title: {
    color: "#ccc",
    fontSize: 16,
  },

  value: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
});